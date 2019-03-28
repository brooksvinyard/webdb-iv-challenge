
const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    getRecipe
};

function getRecipes() {
    return db('recipes')
};

function getRecipe(id) {
    return db('recipes')
    .where({ id })
    .first();
};