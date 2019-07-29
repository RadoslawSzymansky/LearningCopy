const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const message = {};
message.from = 'radek199@gmail.com';

// ustawienie zeby narazie podczas produkcji nie wysylalo

message.mail_settings = {
  sandbox_mode: {
    enable: false
  }
}

exports.module = message