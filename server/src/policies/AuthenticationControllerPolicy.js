const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to meet the following rules:<br>
              1. Consists of the characters a-z, A-Z, and 0-9<br>
              2. Is between 8 and 32 characters long`
          })
          break
        default:
          res.status(400).send({
            error: 'An error occured.'
          })
          break
      }
    } else {
      next()
    }
  }
}
