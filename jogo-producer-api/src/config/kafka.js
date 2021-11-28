const { Kafka } = require("kafkajs");

const clientId = "jogo";
const brokers = [process.env.KAFKA_BROKER];
const topic = "tweets";

const kafka = new Kafka({ clientId, brokers });

const producer = kafka.producer();

module.exports = {
  async send(message) {
    await producer.connect();
    await producer.send({
      topic,
      messages: [
        {
          value: message,
        },
      ],
    });
    await producer.disconnect();
  },
};
