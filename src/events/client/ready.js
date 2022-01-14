/** @param {import('../../main')} client*/
module.exports = (client) => {
    client.on(`ready`, (client) => {
        console.log(client.uptime);
    });
};
