exports.run = (client, message, args) => {
  const [link] = args;
  const embed = { embed: {
      color: '#ffffff',
      author: {
        name: client.user.username,
        icon_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      },
      fields: [{
        name: `GitHub link`,
        value: `Click [here](https://www.github.com/${link}) to open the GitHub link.`
      }],
      footer: {
        text: 'If the page is not available, try to type it correctly and make sure it exists!'
      }
    }
  }
  if(!args || args.length < 1) return message.reply("you need to include the argument!");
  else if(args.length < 2) {
    message.channel.send(embed);
  } else {
    message.reply('you only need one argument!');
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true
}

exports.h = {
  name: 'gl',
  desc: 'Displays the GitHub link according to the argument.',
  usage: '**.gl** *<insert/args/here>*'
}
