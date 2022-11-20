const express = require('express');
const salesControllers = require('../controllers/sales.controllers');

const Router = express.Router();

Router.post('/', salesControllers.insert);

module.exports = Router;