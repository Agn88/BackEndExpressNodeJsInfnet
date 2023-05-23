const Joi = require("joi");

const EntrarSchema = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
});

const entrar = (req, res, next) => {
  const { error } = EntrarSchema.validate(req.body);
  if (error) {
    console.log(error);
    next(error);
    return;
  }
  next();
};

module.exports = entrar;