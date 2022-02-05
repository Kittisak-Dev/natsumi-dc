import { ClientOptions as DiscordClientOptions } from 'discord.js';
import { Permission } from './Permission';

export type Token = 'env' | string;

export interface ClientOptions extends DiscordClientOptions {
    token: Token;
    prefix?: string;
    commandsPath: string;
    eventsPath: string;
    commandLoadedMessage?: boolean;
    eventLoadedMessage?: boolean;
    permissionData: {
        [key: string]: Permission;
    };
}
