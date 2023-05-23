const { JWTService } = require("../services");
const { TokenError } = require("../../errors");

const verificaToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new TokenError();
    }

    const [type, token] = authorization.split(" ");
    if (type !== "Bearer") {
      throw new TokenError();
    }

    const jwtData = JWTService.verify(token);
    if (!jwtData) {
      throw new TokenError();
    }

    req.headers.userEmail = jwtData.email.toString();
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = verificaToken;