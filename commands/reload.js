exports.run = (client, message, args) => {
  if(message.author.id !== client.config.ownerID) return;
  if(!args || args.length < 1) return message.reply("you must provide a command name to reload.");
  const commandName = args[0];
  if(!client.commands.has(commandName)) {
    return message.reply("that command does not exist");
  }
  delete require.cache[require.resolve(`./${commandName}.js`)];
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`the command \`${commandName}\` has been reloaded.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false
}

exports.h = {
  name: 'reload',
  desc: 'Reloads a command.',
  usage: '**.reload** *<command>*'
}
