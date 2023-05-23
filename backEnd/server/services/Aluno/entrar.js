const { LoginError } = require("../../../errors");
const { alunos } = require("../../../databases");

const entrar = ({ email, senha }) => {
  const aluno = alunos.find((aluno) => aluno.email === email);
  if (aluno && aluno.senha === senha) {
    return;
  }
  throw new LoginError();
};

module.exports = entrar;