const Joi = require("joi");

const schemas = {
  user: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = schemas;
