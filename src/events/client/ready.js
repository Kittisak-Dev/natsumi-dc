/**
 *
 * @param {import('discord.js').Client<true>} client
 */
module.exports = (client) => {
    console.info(`>`.bold, `${client.user.username.green}`, `is online`.yellow);
};
