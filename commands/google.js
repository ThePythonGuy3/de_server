exports.run = (client, message, args) => {
  const google = args.join(' ');
  const search = google.replace(/ /g, '%20');
  const embed = { embed: {
      color: '#4885ed',
      author: {
        name: client.user.username,
        icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png'
    },
      fields: [{
        name: 'Google',
        value: `Click [here](https://www.google.com/search?q=${search}) to see the google search result.`
      }],
      footer: {
        text: 'If the link doesn\'t work, try again.'
      }
    }
  }
  message.channel.send(embed);
}
