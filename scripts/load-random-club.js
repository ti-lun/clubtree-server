'use strict';

let _ = require('lodash');
let faker = require('faker');
let config = require('config');
let Promise = require('bluebird');
let mongoose = require('mongoose');

mongoose.Promise = Promise;

const models = require('../app/models');
const vibes = require('../data/vibes');
const clubCategories = require('../data/club-categories');

const numberOfClubs = process.argv[2] || 1;

mongoose.connect(config.get('mongodb.hostname'), { useMongoClient: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', (callback) => {

    return Promise.mapSeries(_.times(numberOfClubs), function (i, index) {

        let document = new models.Club({
            show: true,
            real: false,
            clubName: faker.commerce.productName() + ' Club',
            description: faker.hacker.phrase(),
            meetingLocation: faker.finance.currencyCode() + ' ' + faker.random.number({ min: 100, max: 149 }),
            meetingDatesAndTimes: generateRandomDateAndTime(),
            clubLogo: faker.image.image().replace('640', '150').replace('480', '150'),
            clubCover: faker.image.image().replace('640', '560').replace('480', '180'),
            members: [],
            organizers: [],
            vibes: _.take(_.shuffle(vibes), faker.random.number({ min: 3, max: 5 })),
            category: _.head(_.shuffle(clubCategories)),
            foundedYear: faker.date.past(faker.random.number({ min: 1, max: 20 })),
            createdDate: Date.now(),
            memberReq: faker.lorem.sentence(),
            clubFeeAmount: faker.finance.amount(),
            clubFeePeriod: faker.random.arrayElement(['weekly', 'monthly', 'quarterly', 'annually', 'yearly']),
            numberOfMembers: faker.random.number({ min: 3, max: 999 }),
        });

        return Promise.try(function () {
            return document.save();
        }).then(function () {
            console.log('inserted 1 random club profile: ' + document._id);
            console.log(JSON.stringify(document, null, 4));
        });
    }).finally(function () {
        mongoose.connection.db.close(function (err) {
            if (err) throw err;
        });
    });
});

function generateRandomDateAndTime() {
    let weekdays = _.union(_.times(3, faker.date.weekday));
    let response = { meetingDays: weekdays };

    weekdays.forEach(function (day) {
        response[day] = {
            start: { hour: faker.random.number({ min: 1, max: 12 }), meridian: 'AM' },
            end: { hour: faker.random.number({ min: 1, max: 12 }), meridian: 'PM' }
        }
    })

    return response;
}
