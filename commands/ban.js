const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Je hebt hier geen permissie toe!')

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Geef een gebruiker op!');

    if(!member) return message.channel.send('Deze gebruiker is niet gevonden op de server! Probeer het opnieuw!');
    if(!member.kickable) return message.channel.send('Deze gebruiker kunt u niet bannen!');

    if(member.id === message.author.id) return message.channel.send('Sukkel, je kan jezelf niet bennen!');

    let reason = args.slice(1).join(" ");

    if(!reason) return message.reply('Geef een reden op!');

    member.ban(reason)
    .catch(err => {
        if(err) return message.channel.send('Contacteer de developer van de bot, iets is er mis gegaan!')
    })

    const kickEmbed = new discord.MessageEmbed()
    .setTitle('Gebruiker geband')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('Gebruiker', member)
    .addField('Geband door', message.author)
    .addField('Reden', reason)
    .setColor("#be2ee6")
    .setTimestamp()

    var logChannel = message.member.guild.channels.cache.find(channel => channel.name === "⛔logs");
    if (!logChannel) return;

    logChannel.send(kickEmbed);

}

module.exports.help = {
    name: "ban",
    description: "Ban een speler (!ban {gebruiker} {reden}).",
    category: "Admin"
}