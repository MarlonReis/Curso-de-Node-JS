'use strict';
const md5 = require('md5');
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.getCustomerFindAll = async () => await Customer.find({});

exports.getCustomerFindById = async (id) => await Customer.findById({ id });

exports.getCustomerFindByEmail = async (email) => await Customer.findOne({ email: email });

exports.create = async (data) => {
    const customer = new Customer({
        name: data.name,
        email: data.email,
        password: md5(data.password + global.SALT_KEY)
    });
    return await customer.save();
}

exports.autenticate = async (data) => Customer.findOne({
    email: data.email,
    password: data.password
});


exports.getUserById = async (id) => await Customer.findById(id);

