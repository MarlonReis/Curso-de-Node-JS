'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.getFindProducty = async () => await Product.find({ active: true }, 'title price slug');

exports.getFindProductyBySlug = async (slug) => await Product.findOne({ active: true, slug: slug }, 'title price slug');

exports.getFindProductyById = async (id) => await Product.findById({ id }, 'title price slug');


exports.create = async (data) => {
    const product = new Product(data);
    return await product.save();
}