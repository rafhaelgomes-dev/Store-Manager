const express = require('express');
const productsController = require('../controllers/products.controllers');

const Router = express.Router();

Router.get('/', productsController.getAll);

Router.get('/:id', productsController.getById);

Router.post('/', productsController.insert);

Router.put('/:id', productsController.update);

module.exports = Router;