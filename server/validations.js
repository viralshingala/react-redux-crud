var Joi = require('joi');

var carBody = {
  manufacturer: Joi.string().required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.string().required()
};

module.exports = {
  car: {
    body: carBody
  },
};
