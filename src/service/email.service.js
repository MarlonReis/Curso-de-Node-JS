'use strict';

const config = require('../config');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendgriKey);


exports.send = async (from, to, subject, body) => {
    const msg = {
        to: to,
        from: from,
        subject: subject,
        html: `<strong>${body}</strong>`,
    };
    sgMail.send(msg);
}