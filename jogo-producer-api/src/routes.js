const routes = require("express").Router();
const jogoController = require("./controllers/JogoController");

routes.post("/tweets", jogoController.addTweet);

module.exports = routes;
