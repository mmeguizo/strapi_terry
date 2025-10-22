'use strict';

const nodemailer = require('nodemailer');

module.exports = {
  provider: 'email-nodemailer',
  name: 'Nodemailer Email Provider',
  init(providerOptions = {}, settings = {}) {
    const transporter = nodemailer.createTransport(providerOptions);

    return {
      async send(options) {
        await transporter.sendMail({
          from: options.from || settings.defaultFrom,
          to: options.to,
          cc: options.cc,
          bcc: options.bcc,
          replyTo: options.replyTo || settings.defaultReplyTo,
          subject: options.subject,
          text: options.text,
          html: options.html,
        });
      },
    };
  },
};
