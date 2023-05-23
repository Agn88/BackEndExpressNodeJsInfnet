const Joi = require("joi");

const AlunoSchema = Joi.object({
  nome: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  dataNascimento: Joi.date().min("2000-01-01").required(),
  telefone: Joi.string(),
  senha: Joi.string().alphanum().required(),
});

module.exports = AlunoSchema;