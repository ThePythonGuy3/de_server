exports.run = (client, message, args) => {
  const [link] = args;
  if(!args || args.length < 1) return message.reply("you need to include an argument.");
  else if(args.length < 2) {
    message.channel.send(`<https://github.com/${link}>`);
  } else {
    message.reply('you only need one argument.');
  }
};
