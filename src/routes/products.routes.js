const express = require('express');
const productsController = require('../controllers/products.controllers');

const Router = express.Router();

Router.get('/', productsController.getAll);

Router.get('/:id', productsController.getById);

module.exports = Router;