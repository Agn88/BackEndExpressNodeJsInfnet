const { StatusCodes } = require("http-status-codes");
const { AlunosService } = require("../../services");

const cadastro = (req, res, next) => {
  try {
    const result = AlunosService.cadastrar(req.body);
    res.status(StatusCodes.OK).json({ id: result });
  } catch (error) {
    next(error);
  }
};

module.exports = cadastro;
