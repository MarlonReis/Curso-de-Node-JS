'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.getCustomerFindAll = async () => await Customer.find({});

exports.getCustomerFindById = async (id) => await Customer.findById({ id });

exports.getCustomerFindByEmail = async (email) => await Customer.findOne({ email: email });

exports.create = async (data) => {
    const customer = new Customer(data);
    return await customer.save();
}

