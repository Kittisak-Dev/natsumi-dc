/** @param {import('../../main')} client @returns*/
module.exports = (client) => {
    client.on(`messageCreate`, async (message) => {
        if (message.system || message.author.bot) return;
        if (message.content.startsWith(`hi`)) {
            message.channel.send({ content: `hi ${message.author.username}` });
            return;
        }
        if (message.content.startsWith(`send`)) {
            const [cmd, ...arg] = message.content.split(` `);
            await message.delete();
            await message.channel.send({ content: `${arg.join(` `)}` });
        }
    });
};
