const fs = require('fs');
const Promise = require('bluebird');

module.exports = class ExtendedQueryTag {

    constructor(filename) {
        this.sets = [];
        this.initializeSets = Promise.fromCallback((done) => {
            fs.readFile(filename, done);
        }).then((data) => {
            let querySet;
            querySet = data.toString().split("\n");
            querySet = querySet.map((set) => {
                set = set.split(',');
                set = set.map((e) => e.trim());
                set = set.filter((e) => e);
                return set;
            });
            // querySet = querySet.filter((set) => {
                
            // });
            this.sets = querySet;
        });
    }

    generate(description) {
        let extraTags = [];
        return this.initializeSets.then(() => {
            this.sets.forEach((set) => {
                let shouldAppend = false;
                set.forEach((term) => {
                    shouldAppend = description.includes(term) || shouldAppend;
                });
                if (shouldAppend) {
                    extraTags = extraTags.concat(set);
                }
            });
        }).then(() => {
            return extraTags;
        });
    }
}
