import {
    PermissionString,
    Permissions as DiscordPermissions,
    Message,
    CommandInteraction,
    ApplicationCommandOption,
    Client,
} from 'discord.js';

type Type = 'TEXT' | 'SLASH' | 'BOTH' | 'USER' | 'MESSAGE' | Type[];
type Permissions = PermissionString | DiscordPermissions | Permissions[];
type SlashOptions = ApplicationCommandOption[];
type runCommand = (
    client: Client<true>,
    message: Message | CommandInteraction,
    args: string[]
) => any;

export interface CommandOptions {
    name: string;
    aliases?: string[];
    cagetory?: string;
    permissions?: Permissions;
    usage?: string;
    description?: string;
    cooldowns?: string;
    type?: Type;
    slashOptions?: SlashOptions;
    onlyOwner?: boolean;
    onlyWhitelist?: boolean;
    runCommand: runCommand;
}
