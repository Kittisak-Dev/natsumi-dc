const { Client } = require(`./structures/Client`);
const { glob } = require('glob');
const { promisify } = require('util');
const filePath = promisify(glob);

const client = new Client();

client.online();

filePath(`${process.cwd()}/src/events/**/*.js`).then((dirs) =>
    dirs.forEach((dir) => require(`${dir}`)(client))
);

module.exports = client;
