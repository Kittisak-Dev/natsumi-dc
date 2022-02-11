class Command {
    /**
     *
     * @param {import('../interfaces/CommandOptions').CommandOptions} options
     */
    constructor(options) {
        this.name = options.name;
        this.aliases = options.aliases || [];
        this.cagetory = options.cagetory || 'Developers';
        this.permissions = options.permissions || [];
        this.usage = options.usage || 'ไม่มีคำอธิบาย';
        this.description = options.description || 'ไม่มีคำอธิบาย';
        this.cooldowns = options.cooldowns || '0';
        this.type = options.type || 'TEXT';
        this.slashOptions = options.slashOptions || [];
        this.onlyOwner = options.onlyOwner || false;
        this.onlyWhitelist = options.onlyWhitelist || false;
        this.runCommand = options.runCommand;
    }
}
module.exports = { Command };
