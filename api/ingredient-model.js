
const db = require('../data/dbConfig.js');

module.exports = {
    getIngredients
};

function getIngredients() {
    return db('ingredients')
};