'use strict';

const customerRepository = require('../repository/customer-repository');
const emailService = require('../service/email.service');

exports.getCustomerFindAll = async (req, res, next) => {
    try {
        let lista = await customerRepository.getCustomerFindAll();
        res.status(200).send(lista);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getCustomerFindByEmail = async (req, res, next) => {
    try {
        let customer = await customerRepository.getCustomerFindByEmail(req.params.email);
        res.status(200).send(customer);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getCustomerFindById = async (req, res, next) => {
    try {
        let customer = await customerRepository.getCustomerFindById(req.params.id);
        res.status(200).send(customer);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.save = async (req, res, next) => {
    try {
        let customer = await customerRepository.create(req.body);
        emailService.send(
            'marlon-reis91@hotmail.com', customer.email,
            'Bem vindo a Node Store!',
            `Olá, ${customer.name} seja bem vindo!`);
        res.status(200).send(customer);
    } catch (err) {
        res.status(500).send(err);
    }
}