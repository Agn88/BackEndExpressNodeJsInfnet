const { StatusCodes } = require("http-status-codes");
const { AlunosService, JWTService } = require("../../services");

const entrar = (req, res, next) => {
  try {
    const data = req.body;
    AlunosService.entrar(data);

    const token = JWTService.sign(data.email);
    res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = entrar;
