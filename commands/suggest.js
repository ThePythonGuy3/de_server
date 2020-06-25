exports.run = (client, message) => {
  var args1 = message.content.slice(client.config.prefix.length).trim().split(/>/g);
  var [mod, author, suggestion] = args1;
  const embed = { embed: {
      color: '#0cf0d5',
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
      },
      fields: [{
        name: `${mod}`+`${author}`,
        value: `${suggestion}`
      }],
      footer: {
        text: 'This suggestion might be reviewed in the following hours, days, weeks, or never.'
      }
    }
  }
  message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: true
}
