const routes = require("express").Router();
const jogoController = require("./controllers/JogoController");

routes.get("/tweets", jogoController.getTweets);
routes.get("/tweets/analise", jogoController.analiseTweets);

module.exports = routes;
