const userController = require('../controller/userController');

const express = require('express');
const route = express.Router();

route.post('/add',userController.adding);

module.exports = route;