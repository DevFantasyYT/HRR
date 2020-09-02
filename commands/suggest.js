const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Sorry u kan dit niet doen!");
    
    var idee = arguments.join(' ');

    if (!idee) return message.channel.send("**Geef een mededeling mee!**");

    var meldingEmbed = new discord.RichEmbed()
        .setTitle("**Nieuw mededeling!**")
        .setColor("#a6732b")
        .addField("Melding:", idee)
        .addField('Ingezonden door:', message.author);

        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "⛔logs");
        if (!ticketChannel) return;
      
        ticketChannel.send(meldingEmbed).then(embedMessage => {
            embedMessage.react('👍');
            embedMessage.react('👎');


        });
        ticketChannel.send(embedCreateTicket);



    message.channel.send("Mededeling opgegeven!");

}

module.exports.help = {
    name: "suggest"
}