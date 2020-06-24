exports.run = (client, message) => {
  var Discord = require('discord.js')
  var args1 = message.content.slice(client.config.prefix.length).trim().split(/;/g);
  var command1 = args1.shift().toLowerCase()

  var [title, color, desc, footer, fieldName, fieldValue] = args1;
  var embed = new Discord.MessageEmbed()
    .setTitle(`${title}`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor(`${color}`)
    .setDescription(`${desc}`)
    .setFooter(`${footer}`)
    .addFields({ name: `${fieldName}`,
      value: `${fieldValue}`})

  if(!args1 || args1.length < 1) return message.reply('you need to put the arguments! Type \`.helpembed\` for help.');
  if(args1.length == 6){
    message.channel.send(embed);
  } else {
    message.reply('argument is invalid! Type \`.helpembed\` for help.')
  }
}
