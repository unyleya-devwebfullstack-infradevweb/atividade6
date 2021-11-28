const kafka = require("../config/kafka");

module.exports.analiseTweets = async () => {
  const palavrasPositivas = JSON.parse(process.env.PALAVRAS_POSITIVAS);
  const palavrasNegativas = JSON.parse(process.env.PALAVRAS_NEGATIVAS);

  var tweetsPositivos = 0;
  var tweetsNegativos = 0;
  var tweetsDescartados = 0;

  for (let { tweet } of globalTweets) {
    if (palavrasPositivas.some((it) => tweet.includes(it))) {
      tweetsPositivos++;
      continue;
    }

    if (palavrasNegativas.some((it) => tweet.includes(it))) {
      tweetsNegativos++;
      continue;
    }

    tweetsDescartados++;
  }

  return { tweetsPositivos, tweetsNegativos, tweetsDescartados };
};
