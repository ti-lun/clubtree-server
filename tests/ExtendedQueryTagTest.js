let expect = require('chai').expect;

let ExtendedQueryTag = require('../app/ExtendedQueryTag');

describe(__filename + '\n', function () {

    it('automatically initializes before anyone can start using it', function () {
        let instance = new ExtendedQueryTag('data/extended-tags.txt');
        return instance.generate('computer science').then(function (response) {
            expect(response).to.be.an('array');
            expect(response).to.have.length.greaterThan(0);
            expect(response).to.include('compsci');
        });
    });
});
