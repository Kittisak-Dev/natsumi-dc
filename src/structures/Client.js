require('dotenv').config();
require('colors');

const { Client: DiscordClient } = require('discord.js'),
    glob = require('glob'),
    filePath = require('util').promisify(glob);

class Client extends DiscordClient {
    constructor() {
        super({
            intents: ['GUILDS', 'GUILD_MESSAGES'],
        });
        this.dev_mode = process.env.MODE === 'dev';
        this.dev_token = process.env.DEV_TOKEN;
        this.product_token = process.env.TOKEN;
    }
    online() {
        this.login(this.dev_mode ? this.dev_token : this.product_token);
        this.on('ready', (client) => {
            filePath('./src/events/*/*.js').then((events) =>
                events.forEach((event) =>
                    require(event.replace('/src', '.'))(client)
                )
            );
        });
    }
}

module.exports = { Client };
