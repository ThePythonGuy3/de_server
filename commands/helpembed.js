exports.run = (client, message) => {
  var Discord = require('discord.js')
  var embed = new Discord.MessageEmbed()
    .setTitle('Embed')
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor('#00ff00')
    .setDescription('A guide to show you how to use \`.embed\` properly. Keep in mind that the command can only add one field!')
    .setFooter('Don\'t forget to use \';\' to separate arguments instead of spaces!')
    .addFields({ name: 'Arguments',
      value: '**Title** - The embed title below the author.\n**Color** - The color for the embed message using the hex code format.\n**Description** - The description below the embed title.\n**Footer** - The text at the bottom of the embed message.\n**Field Name** - The name of the field below the embed description.\n**Field Value** - The text below the field name.'})
    .addFields({ name: 'Usage',
      value: '**Command format:** \n\`.embed <h>;<title>;<color>;<description>;<footer>;<fieldName>;<fieldValue>\`\n\nNote: The first argument or \`<h>\` won\'t be added to the embed no matter what did you put in it, but it\'s required for the embed to work properly.\n\n**Command usage example:** \n\`.embed h;Insert title here;#ffffff;Insert description here;Insert footer here;This is the field name;This is the field value\`'})
  message.channel.send(embed)
}
