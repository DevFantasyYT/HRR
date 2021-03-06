const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverInfo = new discord.MessageEmbed()
    .setTitle("Bot Informatie")
    .addFields(
        {name: "Server naam:", value:`${message.guild.name}`},
        {name: "Aantal mensen op de server:", value:`${message.guild.memberCount}`},
        {name: "Aantal rollen:", value:`${message.guild.roles.cache.size}`},
    )
    .setColor("#be2ee6")
    .setTimestamp();

return message.channel.send(serverInfo);

}

module.exports.help = {
    name: "serverinfo",
    description: "Krijg alle informatie van de server.",
    category: "Algemeen"
}