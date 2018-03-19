'use strict';

let _ = require('lodash');
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
        let documents = _.times(24, () => { return { show: true } });
        return Promise.map(documents, function (document) {
            document = new Club(document);
            return document.save();
        });
    });

    describe('GET /clubs', function () {

        it('can paginate through all documents', function () {
            return Promise.map([0, 1, 2], function (page) {
                let url = '/clubs?pageNumber=' + page;
                return request(app).get(url)
                    .then(function (res) {
                        expect(res.status).to.equal(200);
                        return res.body;
                    });
            }).reduce(function (memo, item) {
                return memo.concat(item);
            }, []).then(function (data) {
                expect(data).to.have.length(24);
            });
        });

        it('throws error for negative page numbers', function () {
            let url = '/clubs?pageNumber=-1';
            return request(app).get(url)
                .then(function (res) {
                    expect(res.status).to.equal(400);
                    expect(res.body).to.deep.equal({ error: { code: 400, message: 'Invalid pageNumber: -1' } });
                });
        });
    });
});
