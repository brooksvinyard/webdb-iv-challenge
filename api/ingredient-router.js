const router = require('express').Router();
const knex = require('knex');

const db = require('../data/dbConfig.js');
const Ingredients = require('./ingredient-model.js')

// localhost:5555/api/ingredients
// GET all dishes
router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredients.getIngredients();
        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json(error);
    } 
});

module.exports = router;