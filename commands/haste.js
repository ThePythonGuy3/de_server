const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    message.delete()
    if (!args[0]) return message.reply('you need to include the code!');

    const options = {
        method: 'POST',
        body: args.slice(0).join(' '),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let res = await fetch(`${client.config.hasteurl}/documents`, options);
    res = await res.json();

    message.channel.send(`Message has been successfully sent to ${client.config.hasteurl}/${res.key} from <@${message.author.id}>`);
}

exports.conf = {
  enabled: true,
  guildOnly: true
}

exports.h = {
  name: 'haste',
  desc: 'Pastes your code to hastebin.',
  usage: '**.haste** *<code>*'
}
