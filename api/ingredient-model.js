
const db = require('../data/dbConfig.js');

module.exports = {
    getIngredients,
    getIngredient
};

function getIngredients() {
    return db('ingredients')
};

function getIngredient(id) {
    return db('ingredients')
    .where({ id })
    .first();
};