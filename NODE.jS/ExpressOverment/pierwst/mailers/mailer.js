const sqConfig = require('../emailConfig');
const sgMail= require('@sendgrid/mail');
const pug = require('pug')

console.log(sgMail)
exports.send = async (options) => {
  const newOprins = Object.assign(sqConfig, {
    to: options.mail,
    subject: options.subject,
  })
  return await sgMail.send(newOprins)
}
