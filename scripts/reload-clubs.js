'use strict';

let _ = require('lodash');
let config = require('config');
let csvdata = require('csvtojson');
let Promise = require('bluebird');
let mongoose = require('mongoose');

mongoose.Promise = Promise;

const Club = require('../app/models').Club;
const helper = require('../app/helper');
const FILEPATH = process.argv[2] || printUsage();

// which properties of the model are arrays? this variable can tell us
const listOfArrays = _.keys(_.pickBy(Club.schema.paths, (p) => p.instance === 'Array'));


function main() {

    mongoose.connect(config.get('mongodb.hostname'), { useMongoClient: true });
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

    mongoose.connection.once('open', (callback) => {
        return Promise.try(function () {
            return Club.remove({ real: true });
        }).then(function () {
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
        createdDate: Date.now(),
        vibes: helper.generateRandomVibes(),
    };

    row = convert(row);

    document = _.assign(document, row);
    document = new Club(document);

    return Promise.try(function () {
        return document.save();
    }).then(function (response) {
        console.log('inserted: ' + response.clubName);
    });
}

function convert(row) {

    if (typeof row.description === 'string') {
        row.description.replace('\r\n', ' ');
    }

    listOfArrays.forEach(function (path) {
        console.log(path);
        if (typeof row[path] === 'string') {
            console.lo
            row[path] = row[path].split(';');
        }
    });

    return row;
}

function printUsage() {
    console.log('usage: node load-clubs-from-csv.js <filepath>');
    process.exit();
}

return main();
