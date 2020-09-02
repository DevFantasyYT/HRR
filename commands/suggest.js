const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Geef een suggestie mee!")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "♨suggesties" || x.name === "♨suggesties"))
    
    
    if(!channel) {
      return message.channel.send("Er is geen kanaal met de naam: ♨suggesties")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Suggestie:: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#be2ee6")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Je suggestie is doorgegeven " + channel)
    
  
}

module.exports.help = {
    name: "suggest"
}