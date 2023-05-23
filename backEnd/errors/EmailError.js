class EmailError extends Error {
    constructor(message = "Email já existe") {
        super(message);
    }
}
module.exports = EmailError;