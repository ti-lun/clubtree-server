'use strict';

const _ = require('lodash');
const faker = require('faker');

const VIBES = require('../data/vibes.json');

module.exports = {
    generateRandomVibes
};

function generateRandomVibes() {
    return _.concat([],
        _.take(_.shuffle(VIBES.Time), faker.random.number({ min: 1, max: 1 })),
        _.take(_.shuffle(VIBES.Energy), faker.random.number({ min: 1, max: 2 })),
        _.take(_.shuffle(VIBES.Personality), faker.random.number({ min: 1, max: 2 })),
    )
}