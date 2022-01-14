const { Client } = require(`./structures/Client`),
    client = new Client();

client.online();

module.exports = client;
