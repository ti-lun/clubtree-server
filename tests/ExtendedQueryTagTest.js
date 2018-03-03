let expect = require('chai').expect;

let ExtendedQueryTag = require('../app/ExtendedQueryTag');

describe(__filename + '\n', function () {

    let instance = new ExtendedQueryTag('data/extended-tags.txt');

    it('works without having to wait for initialization', function () {
        return instance.generate('').then(function (response) {
            expect(response).to.be.an('array');
        });
    });

    it('does not match parts of a word', function () {
        return instance.generate('academics').then(function (response) {
            expect(response).to.not.include('ics');
            expect(response).to.not.include('compsci');
        });
    });

    it('can match multiple words', function () {
        return instance.generate('donald bren').then(function (response) {
            expect(response).to.include('ics');
            expect(response).to.include('compsci');
        });
    });
    
    it('does case-insensitive matching', function () {
        return instance.generate('cOmPuTeRs').then(function (response) {
            expect(response).to.include('ics');
            expect(response).to.include('compsci');
        });
    });
});
