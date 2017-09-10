'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, 'E-mail já existe!']
    },
    password: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Custumer', schema);