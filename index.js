const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

client.on('message', message => {
  if (message.content === 'h'){
    const h = message.guild.emojis.cache.find(emoji => emoji.name === 'h_');
    message.react(h);
  } else

  if(message.channel.type == "text" && message.channel.name.toLowerCase() == "suggestions"){
    const yes = message.guild.emojis.cache.find(emoji => emoji.name === 'yes');
    const no = message.guild.emojis.cache.find(emoji => emoji.name === 'no');
    message.react(yes);
    message.react(no);
  }
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loading command ${commandName}..`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
