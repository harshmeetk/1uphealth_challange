
'use strict';
const express = require('express');
const router = express.Router();
const app = express();
const getEverything = require('./getEverything.js');
const getAllPatients = require('./getAllPats');


module.exports = function(app) {
  app.route('/api/v1/allpats').post(getAllPatients);
  app.route('/api/v1/patsearch').post(getEverything);


};
