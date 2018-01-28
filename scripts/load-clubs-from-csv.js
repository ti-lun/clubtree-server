'use strict';

let _ = require('lodash');
let config = require('config');
let csvdata = require('csvtojson');
let Promise = require('bluebird');
let mongoose = require('mongoose');

mongoose.Promise = Promise;

const Club = require('../app/models').Club;
const FILEPATH = process.argv[2] || printUsage();
const HEADERS = [
    'timestamp',
    'username',
    'clubName',
    'category',
    'foundedYear',
    'description',
    'meetingLocation',
    'meetingTimes',
    'memberReq',
    'feeDescription',
    'vibes1',
    'vibes2',
    'vibes3',
    'clubLogo',
    'clubCover',
];

function main() {

    mongoose.connect(config.get('mongodb.hostname'), { useMongoClient: true });
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

    mongoose.connection.once('open', (callback) => {
        return Promise.try(function () {
            return read(FILEPATH);
        }).mapSeries(function (row) {
            return load(row);
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
            headers: HEADERS
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

function load(row) {

    let document = {
        show: true,
        real: true,
        vibes: _.concat([], row.vibes1, row.vibes2.split(';'), row.vibes3)
    };

    document = _.assign(document, row);
    document = new Club(document);

    return Promise.try(function () {
        if (document.clubLogo) {
            let matches = document.clubLogo.match(/id=(.+)/);
            if (matches[1]) {
                let imageURL = 'https://drive.google.com/thumbnail?id=' + matches[1];
                document.clubLogo = imageURL;
            }
        }
    }).then(function () {
        if (document.clubCover) {
            let matches = document.clubCover.match(/id=(\w+)/);
            if (matches[1]) {
                let imageURL = 'https://drive.google.com/thumbnail?id=' + matches[1];
                document.clubCover = imageURL;
            }
        }
    }).then(function () {
        return document.save();
    }).then(function (response) {
        console.log('inserted: ' + response.clubName);
    });
}

function printUsage() {
    console.log('usage: node load-clubs-from-csv.js <filepath>');
    process.exit();
}

return main();
