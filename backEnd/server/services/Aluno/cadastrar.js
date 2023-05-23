const uuid = require("uuid");

const { alunos } = require("../../../databases");
const { EmailError } = require("../../../errors");

const cadastrar = (aluno) => {
  const id = uuid.v4();
  const { email } = aluno;

  const alunoExistente = alunos.find((aluno) => aluno.email === email);
  if (alunoExistente) {
    throw new EmailError();
  }

  alunos.push({ id, ...aluno });
  return id;
};

module.exports = cadastrar;