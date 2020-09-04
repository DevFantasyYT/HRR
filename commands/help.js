const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try{

        var text = "**Help lijst** \n\n **__Commands__** \n !hallo - De bot begroet je terug \n !info - Geeft info over de bot. \n !serverinfo - Geeft informatie over de server. \n !ticket - Maak een ticket aan. \n !suggest - Geef een suggestie op voor de server.";

        var textAdmin = "\n **__Admin__** \n !kick - Kick een speler (!kick {gebruiker} {reden}) \n !ban - Ban een speler (!ban {gebruiker} {reden}) \n !clear - Verwijder een aantal berichten. \n !melding - Maak een mededeling!";

        message.author.send(text)

        message.author.send(textAdmin)

        message.reply("Alle commands staan in je DM📫")

    }catch(error){
        mwessage.reply('Er is iets fout gelopen!');
    }

}

module.exports.help = {
    name: "help"
}