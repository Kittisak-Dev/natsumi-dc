// Discord.js
import { Client as DiscordClient } from 'discord.js';

// File system
import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { config } from 'dotenv';

// Interfaces
import { ClientOptions } from '../interfaces/ClientOptions';

const envPath: string = join(process.cwd(), '.env');

function dotenvConfig() {
    config({ path: envPath });
}

dotenvConfig();

// Client class
export class Client extends DiscordClient {
    public declare options: ClientOptions;
    public prefix: string | undefined;
    public development: boolean = false;

    public constructor(options: ClientOptions) {
        super(options);

        this.options = options;
        this.prefix = options.prefix;

        if (options.token === 'env') {
            if (!existsSync(envPath)) {
                writeFileSync(envPath, 'TOKEN = "your_bot_token_here"');
                throw new Error(
                    'A .env file has been created in your root directoy. Please add your token to this file or instead put it in the config.json'
                );
            }
            options.token = process.env.TOKEN as string;
        }
    }
}
