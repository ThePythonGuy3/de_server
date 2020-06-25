exports.run = (client, message) => {
  var Discord = require('discord.js')
  var embedOne = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor('#00ff00')
    .setTitle('Commands')
    .setDescription('**.help** - You just typed it.\n**.ping** - Pong!\n**.google** *<args>* - Googles the argument you typed.\n**.haste** *<code>* - Paste your code to hastebin, only works with message that has less than 2000 characters.\n**.gh** *<user> <repository> (optional)* - The GitHub user link or the repository of the user.\n**.gl** *<insert/args/here>* - The GitHub link according to the argument.\n**.embed** - A one field embed message, type **.helpembed** to learn more.\n**.helpembed** - An information on how to use **.embed**.')
  message.channel.send(embedOne)
}

exports.conf = {
  enabled: true,
  guildOnly: false
}

exports.h = {
  name: 'help',
  desc: 'Yes.',
  usage: '**.help** *<command> (optional)*'
}
