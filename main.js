
const userToken = "YOUR_TOKEN_HERE"
const channelID = "CHANNEL_ID_HERE"
const { Client, MessageEmbed } = require('discord.js-selfbot');
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.username}#${client.user.discriminator} Started`)
  client.on("voiceStateUpdate", async (oldMember, newMember)=> { 
    if (oldMember.id == client.user.id) {
      if (newMember.id == client.user.id) {
        if(!newMember.channelID){
          console.log("left " + oldMember.channel.name);
          const channel = client.channels.cache.get(channelID);
          channel.join().then(connection => {
            console.log("Successfully connected to "+ channel.name);
          }).catch(e => {
            console.error(e);
          });
        }
      }
    }
  });
});


client.login(userToken)
console.log("https://github.com/Mystro69"); 
console.log("Waiting for login (May take half a minute.)")