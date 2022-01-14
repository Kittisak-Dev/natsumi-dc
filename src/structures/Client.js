const { Client: DJS } = require(`discord.js`),
    { glob } = require('glob'),
    { promisify } = require('util'),
    filePath = promisify(glob);

require(`dotenv`).config();

class Client extends DJS {
    constructor() {
        super({
            intents: ['GUILDS', 'GUILD_MESSAGES'],
        });
        /** @private */
        this.mode =
            process.env.MODE === `development` ? `development` : `production`;
    }
    online() {
        this.login(
            this.mode === 'development'
                ? `${process.env.DEV_TOKEN}`
                : `${process.env.TOKEN}`
        )
            .catch((err) => {
                console.log(err.message);
                process.exit(1);
            })
            .finally(() => console.log(`Client Mode :`, this.mode));

        filePath(`${process.cwd()}/src/events/**/*.js`).then((dirs) =>
            dirs.forEach((dir) => require(`${dir}`)(this))
        );
    }
}

module.exports = { Client };
