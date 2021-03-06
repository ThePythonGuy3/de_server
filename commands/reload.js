exports.run = (client, message, args) => {
  if(message.author.id !== client.config.ownerID) return;
  if(!args || args.length < 1) return message.reply("you must provide a command name to reload.");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!client.commands.has(commandName)) {
    return message.reply("that command does not exist");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`the command \`${commandName}\` has been reloaded.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false
}
