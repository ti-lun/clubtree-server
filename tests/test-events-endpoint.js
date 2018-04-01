'use strict';

let expect = require('chai').expect;
let moment = require('moment');
let request = require('supertest');
let Promise = require('bluebird');

let app = require('../app/app.js');
let Club = require('../app/models').Club;
let Event = require('../app/models/event.js');

describe(__filename + '\n', function () {

    let documents;

    before('reset database', function () {
        return Event.remove({});
    });

    before('add clubs', function () {
        let clubs = [{
            origin: 'CLUB-0001',
            clubName: 'clubtree'
        }, {
            origin: 'CLUB-0002',
            clubName: 'clubtree'
        }];
        return Promise.map(clubs, function (c) {
            c = new Club(c);
            return c.save();
        });
    });

    before('add events', function () {
        documents = [{
            origin: 'CLUB-0001',
            start_time: moment().add(5, 'days')
        }, {
            origin: 'CLUB-0002',
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

        it('can filter by club', function () {
            return request(app).get('/events')
                .query({ origin: 'CLUB-0001' })
                .then(function (res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.length(1);
                });
        });

        it('returns club information in each event document', function () {
            return request(app).get('/events')
                .then(function (res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.length(2);

                    res.body.forEach(function (event) {
                        expect(event.club.origin).to.equal(event.origin);
                        expect(event.club.clubName).to.equal('clubtree');
                    });
                });
        });
    });
});
