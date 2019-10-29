
'use strict';
const express = require('express');
const router = express.Router();
const app = express();
const findEverything = require('../controllers/findEverything.js');
const findAllPatients = require('../controllers/findAllPatients');


module.exports = function(app) {
  app.route('/api/v1/allpats').post(findAllPatients);
  app.route('/api/v1/patsearch').post(findEverything);


};
