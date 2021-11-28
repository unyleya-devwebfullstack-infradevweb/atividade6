const addTweetService = require("../services/AddTweetService");

module.exports = {
  async addTweet(req, res) {
    const tweet = req.body;
    await addTweetService.addTweet(tweet);
    res.end();
  },
};
