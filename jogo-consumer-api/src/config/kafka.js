global.globalTweets = [];

const { v4: uuidv4 } = require('uuid');
const { Kafka } = require("kafkajs");

const clientId = "jogo";
const brokers = [process.env.KAFKA_BROKER];
const topic = "tweets";

const kafka = new Kafka({ clientId, brokers });

const consumer = kafka.consumer({ groupId: uuidv4() });

consumer.connect();
consumer.subscribe({ topic, fromBeginning: true });

consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    const tweet = JSON.parse(message.value.toString());

    globalTweets.push(tweet);
  },
});
