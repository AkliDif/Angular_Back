const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Ticket', {
  id: Joi.number().required(),
  title: Joi.string().required(),
  date: Joi.date().required(),
  major: Joi.string().valid('SI', 'GE', 'GB', 'GM', 'GP', 'GPE'),
  description: Joi.string().required(),
  archived: Joi.boolean().required(),
  studentId: Joi.number().required()
});
