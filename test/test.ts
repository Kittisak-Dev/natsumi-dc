console.clear();
import { Client } from '../src/index';

import config from './config/config.json';

const client: Client = new Client({ ...config, intents: ['GUILDS'] });

console.log(client);
