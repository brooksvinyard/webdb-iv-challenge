const router = require('express').Router();
const knex = require('knex');

const db = require('../data/dbConfig.js');
const Recipes = require('./recipe-model.js')

// localhost:5555/api/recipes
// GET all dishes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json(error);
    } 
});

// localhost:5555/api/recipes/:id
// GET ingredient by id
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipes.getRecipe(req.params.id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;