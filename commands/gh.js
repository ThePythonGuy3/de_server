exports.run = (client, message, args) => {
  const [user, repository] = args;
  const userEmbed = { embed: {
      color: 3400473,
      author: {
        name: client.user.username,
        icon_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
      fields: [{
        name: `GitHub user ${user}`,
        value: `Click [here](https://www.github.com/${user}) to see user ${user} profile on GitHub.`
      }],
      footer: {
        text: 'If the page is not available, try to type it correctly and make sure it exists!'
      }
    }
  }
  const repoEmbed = { embed: {
      color: 3400473,
      author: {
        name: client.user.username,
        icon_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
      fields: [{
        name: `GitHub repository ${repository} from ${user}`,
        value: `Click [here](https://www.github.com/${user}/${repository}) to see user ${user} ${repository} repository on GitHub.`
      }],
      footer: {
        text: 'If the page is not available, try to type it correctly and make sure it exists!'
      }
    }
  }

  if(!args || args.length < 1) return message.reply("you need to include an argument.");
  else if(args.length < 2){
    message.channel.send(userEmbed);
  } else
  if(args.length < 3){
    message.channel.send(repoEmbed);
  } else {
    message.reply(`you cannot put more than two arguments!`);
  }
};
