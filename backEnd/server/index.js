const express = require("express");
const cors = require("cors");

const router = require("./routes");
const { errorHandler } = require("./middlewares");

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;