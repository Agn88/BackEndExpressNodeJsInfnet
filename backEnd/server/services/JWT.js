const jwt = require("jsonwebtoken");
const { TokenError } = require("../../errors");

const JWT_SECRET = "Eita2033";

const sign = (email) => {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });
};

const verify = (token) => {
  try {
    const result = jwt.verify(token, JWT_SECRET);
    if (typeof result === "string") {
      throw new TokenError();
    }
    return result;
  } catch (error) {
    throw new TokenError();
  }
};

module.exports = {
  sign,
  verify,
};