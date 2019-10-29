'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ResultListSchema = new Schema({
    accessToken: {
        type: String,
        required: 'Kindly enter the accessToken'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    patId: {
        type: String,
        required: 'Kindly enter the patientId'
    },
    page:{
       type: String,
       required:  'Kindly enter the page'
    },
    patientData: Object
});

module.exports = mongoose.model('ResultListSchema', ResultListSchema);