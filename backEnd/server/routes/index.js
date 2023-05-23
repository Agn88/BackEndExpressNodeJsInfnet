const express = require("express");
const router = express.Router();

const {
    Validation,
    verificaToken
} = require("../middlewares");

const {
    LoginController,
    CursoController
} = require("../controllers");

router.get("/", (req, res) => {
    const data = new Date();
    res.status(200).json({
        msg: "Hello World",
        time: data
    });
});

router.post("/cadastro", Validation.LoginValidation.cadastro, LoginController.cadastro);
router.post("/entrar", Validation.LoginValidation.entrar, LoginController.entrar);
router.get("/cursos", verificaToken, CursoController.listar);

module.exports = router;