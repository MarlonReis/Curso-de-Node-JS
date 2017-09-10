'use strict';

const produtoDao = require('../model/product-dao');

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repository/producty-repositorio');

const productyList = (lista, res) => res.status(200).send(lista);
const operationError = (err, res) => res.status(500).send({ mensagem: err.mensagem });
const successfulOperation = (msg, res) => res.status(201).send({ mensagem: msg });

exports.get = async (req, res, next) => {
    try {
        let lista = await repository.getFindProducty();
        productyList(lista, res);
    } catch (err) {
        operationError(err, res);
    }
}

exports.getProducatyBySlug = async (req, res, next) => {
    try {
        let lista = await repository.getFindProductyBySlug(req.params.slug);
        productyList(lista, res);
    } catch (err) {
        operationError(err, res);
    }
}

exports.getProducatyById = async (req, res, next) => {
    try {
        let produto = await repository.getFindProductyById(req.params.id);
        successfulOperation(produto, res);
    } catch (err) {
        operationError(err, res);
    }

}

exports.post = async (req, res, next) => {
    try {
        let produto = await repository.create(req.body);
        successfulOperation(produto, res);
    } catch (err) {
        operationError(err, res);
    }
}

exports.put = (req, res, next) => successfulOperation(req.body, res);

exports.delete = (req, res, next) => successfulOperation(req.body, res);