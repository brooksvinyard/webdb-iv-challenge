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

// localhost:5555/api/ingredients/:id
// GET ingredient by id
router.get('/:id', async (req, res) => {
    try {
        const ingredient = await Ingredients.getIngredient(req.params.id);
        res.status(200).json(ingredient);
    } catch (error) {
        res.status(500).json(error);
    }
});

const errors = {
    '19': 'Another record with that value exists',
};

// localhost:5555/api/ingredients/
// POST new ingredient 
router.post('/', async (req, res) => {
    try {
        const ingredient = await Ingredients.addIngredient(req.body);
        res.status(201).json(ingredient);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
});

module.exports = router;