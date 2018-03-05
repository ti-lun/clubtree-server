const fs = require('fs');
const Promise = require('bluebird');

module.exports = class ExtendedQueryTag {

    constructor(filename) {
        this.sets = [];
        this.initializeSets = Promise.fromCallback((done) => {
            fs.readFile(filename, done);
        }).then((data) => {
            let querySet;
            querySet = data.toString().split(/(\r\n|\r|\n)/);
            querySet = querySet.map((set) => {
                set = set.split(',');
                set = set.map((e) => e.trim());
                set = set.filter((e) => e);
                set = set.map((e) => new QueryTag(e));
                return set;
            });
            querySet = querySet.filter((e) => e.length);
            this.sets = querySet;
        });
    }

    generate(description) {
        let extraTags = [];
        return this.initializeSets.then(() => {
            this.sets.forEach((set) => {
                let matchingTag = null;
                let values = set.map((tag) => {
                    if (matchingTag === null && description && description.match(tag.getRegex())) {
                        matchingTag = tag;
                    }
                    return tag.getValue();
                });
                if (matchingTag) {
                    extraTags = extraTags.concat(values);
                }
            });
        }).then(() => {
            return extraTags;
        });
    }
}

class QueryTag {

    constructor(value) {
        value = value.trim().toLowerCase();
        this.value = value;
        this.regex = new RegExp("(^|\\s+)" + value + "(\\s+|$)", "i");
    }

    getValue() {
        return this.value;
    }

    getRegex() {
        return this.regex;
    }
}
