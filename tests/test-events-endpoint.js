'use strict';

let expect = require('chai').expect;
let moment = require('moment');
let request = require('supertest');
let Promise = require('bluebird');

let app = require('../app/app.js');
let Event = require('../app/models/event.js');

describe(__filename + '\n', function () {

    let documents;

    before('reset database', function () {
        return Event.remove({});
    });

    before('add events', function () {
        documents = [{
            start_time: moment().add(5, 'days')
        }, {
            start_time: moment().subtract(5, 'days')
        }];
        return Promise.map(documents, function (document) {
            document = new Event(document);
            return document.save();
        });
    });

    describe('GET /events', function () {

        it('can get past events', function () {
            return request(app).get('/events')
                .query({ startTime: 'past' })
                .then(function (res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.length(1);
                });
        });

        it('can get future events', function () {
            return request(app).get('/events')
                .query({ startTime: 'future' })
                .then(function (res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.length(1);
                });
        });
    });
});
