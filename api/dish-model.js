
const db = require('../data/dbConfig.js');

module.exports = {
    getDishes,
    getDish
};

function getDishes() {
    return db('dishes')
};

function getDish(id) {
    return db('dishes')
    .where({ id })
    .first();
};