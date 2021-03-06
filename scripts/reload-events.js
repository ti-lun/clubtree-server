'use strict';

let _ = require('lodash');
let FB = require('fb');
let fs = require('fs');
let url = require('url');
let config = require('config');
let csvdata = require('csvtojson');
let Promise = require('bluebird');
let mongoose = require('mongoose');

mongoose.Promise = Promise;

const Event = require('../app/models/event');
const FILEPATH = process.argv[2] || printUsage();

// paste a user access token here, but DO NOT COMMIT IT
FB.setAccessToken('');

function main() {

    mongoose.connect(config.get('mongodb.hostname'), { useMongoClient: true });
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

    mongoose.connection.once('open', (callback) => {
        return Promise.try(function () {
            return Event.collection.drop().catch(function (err) {
                if (err.message !== 'ns not found') throw err;
            });
        }).then(function () {
            return read(FILEPATH);
        }).mapSeries(function (row) {
            // console.log('---------------------- ' + row.website);
            return load(row.website, row.origin);
        }).reduce(function (totalCount, currentCount) {
            return totalCount + currentCount;
        }, 0).then(function (totalCount) {
            console.log('added ' + totalCount + ' events');
        }).finally(function () {
            mongoose.connection.db.close(function (err) {
                if (err) throw err;
            });
        });
    });
}

function read(filepath) {

    return new Promise(function (resolve, reject) {
        let rows = [];
        let options = {
            noheader: false,
        };
        csvdata(options)
            .fromFile(filepath)
            .on('json', function (data, index) {
                rows.push(data);
            })
            .on('end', function () {
                resolve(rows);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}

function load(website, origin) {
    let count = 0;
    let links = [];

    website = website.split(';');
    website.forEach(function (link) {
        if (link.match('facebook')) {
            links.push(link);
        }
    })

    links = links.map(function (link) {
        link = new url.parse(link).pathname;
        link = link.replace(/\/$/, ""); // remove trailing slash
        link = link.replace(/\/about$/, '');
        link = link.replace(/\/photos$/, '');
        link = link.replace(/\/members$/, '');
        return link;
    })

    // console.log(links);

    return Promise.mapSeries(links, function (link) {
        // console.log('one');
        return FB.api(link).then(function (response) {
            // console.log('two');
            // console.log('good link: ' + link);
            return link;
        }).catch(function (err) {
            if (_.get(err, 'response.error.message') === 'No node specified') {
                let matches;
                if (matches = link.match(/\/groups\/(\d+)/)) {
                    return '/' + matches[1];
                } else if (matches = link.match(/\/groups\/([\.\w]+)/)) {
                    let url = '/search?type=group&q=' + matches[1];
                    return FB.api(url).then(function (res) {
                        return '/' + res.data[0].id;
                    });
                } else {
                    // link not usable as is, but once we append "/events", hopefully it will solve the error
                    return link;
                }
            } else if (_.includes(_.get(err, 'response.error.message'), 'Cannot query users by their username')) {
                // generally can't get events from user profiles, so ignore these links
                return null;
            } else if (_.includes(_.get(err, 'response.error.message'), 'Some of the aliases you requested do not exist:')) {
                // don't know why, but club can't be found - need to manually look into this
                console.log('lookup: ' + link);
                return null;
            } else {
                throw err;
            }
        });
    }).mapSeries(function (link) {
        // console.log('tee');
        if (link) {
            return Promise.try(function () {
                // console.log('for');
                let resource = link + '/events';
                // console.log(resource);
                return FB.api(resource);
            }).then(function (res) {
                // console.log('fie');
                // console.log(res);
                return Promise.map(res.data, function (event) {
                    // console.log('saving: ' + event.name + ' (' + event.id + ')');
                    // console.log(event.end_time);
                    let document = new Event(event);
                    document.origin = origin;
                    document.eventLink = 'https://www.facebook.com/' + event.id;
                    return document.save().tap(function () {
                        count++;
                    });
                });
            }).catch(function (err) {
                if (err.response.error.message === 'Unknown path components: /events') {
                    console.log('error: ' + link);
                } else {
                    console.log('unhandled error: ' + link);
                    throw err;
                }
            });
        }
    }).then(function () {
        return count;
    });
}

function printUsage() {
    console.log('usage: node reload-events.js <filepath>');
    process.exit();
}

return main();
