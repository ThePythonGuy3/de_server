exports.run = async (client, message, args) => {
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong!\n\n**Latency:** ${msg.createdTimestamp - message.createdTimestamp}ms\n**API Latency:** ${Math.round(client.ping)}ms`);
}
