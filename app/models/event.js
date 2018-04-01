'use strict';

const mongoose = require('mongoose');

let EventSchema = new mongoose.Schema({
    origin: String,
    eventLink: String,
    description: String,
    name: String,
    place: {
        name: String,
        location: {
            street: String,
            city: String,
            state: String,
            zip: String,
        }
    },
    club: {}, // this is meant to be a read-only field
    start_time: Date,
    end_time: Date,
    id: String
});

module.exports = mongoose.model('events', EventSchema);

