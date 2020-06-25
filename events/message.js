module.exports = (client, message) => {
  if(message.author.bot) return;
  if(message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if(!cmd) return;

  if(cmd && !message.guild && cmd.conf.guildOnly){
    message.channel.send({embed: {
        color: '#ff0000',
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        fields: [{
          name: 'Error',
          value: 'Cannot execute that command inside DMs!'
        }]
      }
    })
  } else {
    cmd.run(client, message, args);
  }
};
