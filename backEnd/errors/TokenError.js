class TokenError extends Error {
    constructor(message = "Token inválido") {
        super(message);
    }
}
module.exports = TokenError;