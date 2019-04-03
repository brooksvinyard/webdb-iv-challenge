
const db = require('../data/dbConfig.js');

module.exports = {
    getIngredients,
    getIngredient,
    addIngredient
};

function getIngredients() {
    return db('ingredients')
};

function getIngredient(id) {
    return db('ingredients')
    .where({ id })
    .first();
};

function addIngredient(ingredient) {
    return db('ingredients')
      .insert(ingredient)
      .then(ids => ({ id: ids[0] }));
};