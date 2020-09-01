const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "709019565635403827";

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("jij kan geen ticket sluiten");

    if(message.channel.parentID == categoryID){
        nessage.channel.delete()
    }

    var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("Ticket, " + message.channel.name)
        .setDescription("Het ticket is gemarkeerd als **compleet**")
        .setFooter("Ticket gesloten");

    var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "⛔logs");
    if (!ticketChannel) return;

    ticketChannel.send(embedCreateTicket);

}

module.exports.help = {
    name: "close"
}