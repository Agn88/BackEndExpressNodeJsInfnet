const Aluno = require("../../../../models/Aluno");

const cadastro = (req, res, next) => {
  const { error } = Aluno.validate(req.body);
  if (error) {
    console.log(error);
    next(error);
    return;
  }
  next();
};

module.exports = cadastro;
