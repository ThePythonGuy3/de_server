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

  if (args1.length == 2) return client.channels.cache.get(client.config.suggestionsID).send(embed);
    else if (!args1){
      message.channel.send({embed: {
          color: '#ff0000',
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          fields: [{
            name: 'Error',
            value: 'You need to include the arguments!'
          }]
        }
      })
    } else {
        message.channel.send({embed: {
          color: '#ff0000',
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          fields: [{
            name: 'Error',
            value: 'You need 3 arguments to type in, type **.help suggest** for help.'
          }]
        }
      })
    }
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
