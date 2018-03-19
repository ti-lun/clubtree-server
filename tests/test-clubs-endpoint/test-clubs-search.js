'use strict';

let expect = require('chai').expect;
let request = require('supertest');
let Promise = require('bluebird');

let app = require('../../app/app.js');
let Club = require('../../app/models.js').Club;

describe(__filename + '\n', function () {

    let documents;

    before('reset database', function () {
        return Club.remove({});
    });

    before('add clubs', function () {
        documents = [{
            show: true,
            category: ['123', 'abc']
        }, {
            show: true,
            category: ['abc', 'xyz']
        }, {
            show: true,
            category: ['xyz', '???']
        }, {
            show: true,
            category: ['???', '123']
        }];
        return Promise.map(documents, function (document) {
            document = new Club(document);
            return document.save();
        });
    });

    describe('GET /clubs', function () {

        it('can filter by category', function () {
            return request(app).get('/clubs')
                .query({ category: '123' })
                .then(function (res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.length(2);
                });
        });

        it('performs AND filter when multiple category filters specified', function () {
            let url = '/clubs'
                + '?category=123'
                + '&category=abc';
            return request(app).get(url)
                .then(function (res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.length(1);
                });
        });

        it('performs OR filter when multiple subcategory filters specified', function () {
            let url = '/clubs'
                + '?subcategory=123'
                + '&subcategory=abc';
            return request(app).get(url)
                .then(function (res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.length(3);
                });
        });
    });
});
