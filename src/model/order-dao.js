
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true,
        enum: ['CREATED', 'DONE'],
        default: 'CREATED'
    },
    status: {
        type: Date,
        required: true,
        default: Date.now
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        producty: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }]
});

module.exports = mongoose.model('Order', schema);