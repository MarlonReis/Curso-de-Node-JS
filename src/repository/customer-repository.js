'use strict';

const mongoose = require('mongoose');
const customer = mongoose.model('Customer');


exports.getCustomerFindAll = async () => await customer.find({});

exports.getCustomerFindById = async (id) => await customer.findById({ id });

exports.getCustomerFindByEmail = async (email) => await customer.findOne({ email: email });

exports.create = async (data) => {
    const customer = new Customer(data);
    return await customer.save();
}

