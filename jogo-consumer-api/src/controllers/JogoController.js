const addTweetService = require("../services/AnaliseTweets");

module.exports = {
  async analiseTweets(req, res) {
    const tweet = req.body;
    const analise = await addTweetService.analiseTweets(tweet);
    res.send(analise);
  },
  async getTweets(req, res){
    res.send(globalTweets);
  }
};
