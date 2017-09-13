'use strict';

const md5 = require('md5');

const customerRepository = require('../repository/customer-repository');
const emailService = require('../service/email.service');
const authService = require('../service/auth.service');

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


const gerateToken = async (data) => {
    return await authService.gerateToken({
        id: data._id,
        name: data.name,
        email: data.email
    });
}

exports.authenticate = async (req, res, next) => {
    const customer = await customerRepository.autenticate({
        email: req.body.email,
        password: md5(req.body.password + global.SALT_KEY)
    });

    if (customer) {
        const token = await gerateToken(customer);

        res.status(200).send({
            token: token,
            data: {
                name: customer.name,
                email: customer.email
            }
        });

    } else {
        res.status(200).send({ message: 'Usuário ou senha invalida!' });
    }
}