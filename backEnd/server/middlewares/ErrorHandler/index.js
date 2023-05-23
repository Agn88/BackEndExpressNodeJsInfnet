const { StatusCodes } = require("http-status-codes");
const Joi = require("joi");
const { EmailError, TokenError, LoginError } = require("../../../errors");

const errorHandler = (err, req, res, next) => {
  if (err instanceof Joi.ValidationError) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: err.details[0].message });
    return;
  }
  if (err instanceof EmailError || err instanceof TokenError) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    return;
  }
  if (err instanceof LoginError) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: err.message });
    return;
  }

  console.error(err);
  console.log("Servidor ok...");
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
};

module.exports = errorHandler;
