const mailer = require('./mailer')
exports.applicationNotify = options => {
  const defaultOptions = {
    subject: '[] you are hero',
    view: 'app'
  }
  return mailer.send(Object.assign(defaultOptions, options))
}