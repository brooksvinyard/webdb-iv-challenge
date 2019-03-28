
const express = require('express');

const dishRouter = require('./api/dish-router.js');
// const recipeRouter = require('./api/recipe-router.js');
const ingredientRouter = require('./api/ingredient-router.js');

const server = express();

server.use(express.json());

server.use('/api/dishes', dishRouter);
// server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);

module.exports = server;