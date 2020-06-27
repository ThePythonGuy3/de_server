module.exports = (client, member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  const hhh = member.guild.emojis.cache.find(em => em.name === 'h_');
  if (!channel) return;
  channel.send(`${hhh}ello, ${member}!`);
}
