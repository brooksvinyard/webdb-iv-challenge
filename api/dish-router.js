const router = require('express').Router();
const knex = require('knex');

const db = require('../data/dbConfig.js');
const Dishes = require('./dish-model.js')

// localhost:5555/api/dishes
// GET all dishes
router.get('/', async (req, res) => {
    try {
        const dishes = await Dishes.getDishes();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json(error);
    } 
});

// localhost:5555/api/dishes/:id
// GET dish by id
router.get('/:id', async (req, res) => {
    try {
        const dish = await Dishes.getDish(req.params.id);
        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json(error);
    }
});

const errors = {
    '19': 'Another record with that value exists',
};

// localhost:5555/api/dishes/
// POST new dish 
router.post('/', async (req, res) => {
    try {
        const dish = await Dishes.addDish(req.body);
        res.status(201).json(dish);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
});

module.exports = router;