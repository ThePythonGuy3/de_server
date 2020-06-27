exports.run = (client, message) => {
  if(message.author.id === client.config.ownerID) return;
  client.emit('guildMemberAdd', message.member).catch(err)
}
