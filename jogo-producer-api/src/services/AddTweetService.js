const kafka = require("../config/kafka");

module.exports.addTweet = async (tweet) => {
  await kafka.send(JSON.stringify(tweet));
};
