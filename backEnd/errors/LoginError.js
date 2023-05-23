class LoginError extends Error {
    constructor(message = "Atenção, e-mail ou senha inválidos") {
        super(message);
    }
}
module.exports = LoginError;