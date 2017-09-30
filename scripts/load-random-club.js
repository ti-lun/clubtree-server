'use strict';

let _ = require('lodash');
let faker = require('faker');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const models = require('../app/models');
const vibes = require('../data/vibes');
const clubCategories = require('../data/club-categories');

const numberOfClubs = process.argv[2] || 1;

mongoose.connect('mongodb://ct_test:rootstest@ds149491.mlab.com:49491/clubtree_dev');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', (callback) => {

    for (let i = 0; i < numberOfClubs; i++) {
        let document = new models.Club({
            clubName: faker.commerce.productName() + ' Club',
            description: faker.hacker.phrase(),
            imageURLs: {
                logo: faker.image.image().replace('640', '150').replace('480', '150'),
                cover: faker.image.image().replace('640', '560').replace('480', '180')
            },
            meeting: {
                meetingLocation: faker.address.city(),
                meetingTime: faker.date.weekday()
            },
            personality: {
                values: ''
            },
            members: [],
            organizers: [],
            vibes: _.take(_.shuffle(vibes), faker.random.number({ min: 2, max: 5 })),
            category: _.head(_.shuffle(clubCategories)),
            foundedYear: faker.date.past(faker.random.number({ min: 1, max: 20 })).getFullYear(),
            createdDate: Date.now(),
            numberOfMembers: faker.random.number({ min: 3, max: 999 }),
        });

        document.save(function (err) {
            if (err) throw err;

            console.log('inserted 1 random club profile: ' + document._id);
            console.log(JSON.stringify(document, null, 4));

            mongoose.connection.db.close(function (err) {
                if (err) throw err;
            });
        });
    }
});
