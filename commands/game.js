const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.reply("De game is nog in onderhoud, de link komt als de game klaar is.")

}

module.exports.help = {
    name: "game",
    description: "Geeft een link naar de roblox game.",
    category: "Roblox"
}