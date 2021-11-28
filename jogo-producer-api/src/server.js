require("express-async-errors");
require("dotenv").config();

const express = require("express");
const { errorHandlerMiddleware } = require("./services/ErrorHandler");

const app = express();

app.use(errorHandlerMiddleware);
app.use(express.json())
app.use("/api/jogo", require("./routes"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Serviço rodando na porta ${port}!`));
