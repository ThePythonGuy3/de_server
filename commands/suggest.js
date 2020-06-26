exports.run = (client, message) => {
  var args1 = message.content.slice(client.config.prefix.length).trim().split(/;/g);
  var command1 = args1.shift().toLowerCase();

  var [modrole, suggestion] = args1;
  const embed = { embed: {
      color: '#00ff00',
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL()
      },
      fields: [{
        name: `${modrole}`,
        value: `${suggestion}`
      }],
      footer: {
        text: 'This suggestion might be reviewed in the following hours, days, weeks, or never.'
      }
    }
  }
  let suggestChannel = message.channel.id == client.config.suggestionsID;

  message.delete();
  client.channels.cache.get(client.config.suggestionsID).send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: true
}

exports.h = {
  name: 'Suggest',
  desc: 'Redirects your suggestion to the <#704356079756247160> channel.',
  usage: '**.suggest** *<h>;<mod-role>;<suggestion>*'
}
