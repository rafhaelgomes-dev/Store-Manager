const express = require('express');
const salesControllers = require('../controllers/sales.controllers');

const Router = express.Router();

Router.post('/', salesControllers.insert);

Router.get('/', salesControllers.get);

Router.get('/:id', salesControllers.getById);

module.exports = Router;