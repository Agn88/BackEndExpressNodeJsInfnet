const StatusCodes = require("http-status-codes");
const listar = (req, res, next) => {
    try {
        res.status(StatusCodes.OK).json({ cursos: "Cursos!" });
    } catch (error) {
        next(error);
    }
};

module.exports = listar;