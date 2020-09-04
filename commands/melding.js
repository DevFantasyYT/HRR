const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Je hebt hier geen permissie toe!')
  
    if(!args.length) {
      return message.channel.send("Geef een melding mee!")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "🔈mededelingen" || x.name === "🔈mededelingen"))
    
    
    if(!channel) {
      return message.channel.send("Er is geen kanaal met de naam: 🔈mededelingen")
    }
                                                    
    
    let embed = new discord.MessageEmbed()
    .setAuthor("Melding: " + message.author.tag)
    .setThumbnail(message.author.avatarURL())
    .setColor("#be2ee6")
    .addField(args.join(" "))
    .setFooter("Melding door: " + message.author)
    .setTimestamp()
    

    
    message.channel.send("Je melding is doorgegeven!")
    
  
}

module.exports.help = {
    name: "melding"
}