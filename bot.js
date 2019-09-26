const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  client.user.setStatus('available')
  client.user.setPresence({
      game: {
          name: 'YOU',
          type: "WATCHING",
      }
  });
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply('nah.');
  }
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply(' Whats the magic word?');
  }
});

client.on('message', msg => {
  if (msg.content === 'fuck you') {
    msg.reply('fuck me yourself coward');
  }
});

client.on('message', msg => {
  if (msg.content === 'YES I AM') {
    msg.reply("tsk tsk tsk");
  }
});

client.on('message', msg => {
  if (msg.content === 'Just monika') {
    msg.reply('I dont like her. she thinks she can win people over just by mashing a few notes on the piano');
  }
});

client.on('message', msg => {
  if (msg.content === 'tabby') {
    msg.reply('whomst has summoned the almighty one?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Obama') {
    msg.reply('Replace the "Ob" in obama with "Joe M"');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do you want to play the piano with me?') {
    msg.reply('Fuck off.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Oh, do you like to play the piano too?') {
    msg.reply('stfu');
  }
});

client.on('message', msg => {
  if (msg.content === 'please') {
    msg.reply('my main function is to respond to trigger words. I dont have a set prefix so saying things on their own or in a sentence is usually fine. Im not supposed to list all my triggers (but maybe Ghost will show you a list if you ask nicely) so just experiment a little. try things such as "creeper" or "hotel" to get started');
  }
});

client.on('message', msg => {
  if (msg.content === 'creeper') {
    msg.reply('aaawwww maaan');
  }
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'you fell for it fool') {
    msg.reply('THUNDER CROSS SPLIT ATTACK');
  }
});

client.on('message', msg => {
  if (msg.content === 'you know what they say') {
    msg.reply('all toasters toast toast');
  }
});

client.on('message', msg => {
  if (msg.content === 'wood fired pizza') {
    msg.reply('hows pizza supposed to get a job now?');
  }
});


client.on('message', msg => {
  if (msg.content === 'hotel') {
    msg.reply('trivago');
  }
});

client.on('message', (message) => {
  if(message.content.includes('dick and balls')) {
   message.reply('maybe a little cock too');
}
});

client.on('message', (message) => {
   if(message.content.includes('69')) {
    message.reply('nice');
}
});

client.on('message', (message) => {
   if(message.content.includes('flex tape')) {
    message.reply('i cant talk about Flex tape with anybody it creates too much flexual tension');
}
});

client.on('message', (message) => {
   if(message.content.includes('OwO')) {
    message.reply('UwU');
}
});


client.on('message', (message) => {
   if(message.content.includes('tabby bot')) {
    message.reply('dont call me a bot bitch');
}
});

client.on('message', (message) => {
  if(message.content.includes('thank you tabby')) {
   message.reply('you better be thankful');
}
});

client.on('message', (message) => {
  if(message.content.includes('do you like callie')) {
   message.reply('no');
}
});

client.on('message', (message) => {
  if(message.content.includes('ITS TRUCK MONTH')) {
   message.reply('lTS TRUCK MONTH BABY');
}
});

client.on('message', (message) => {
   if(message.content.includes('luigi')) {
    message.reply('yall better have LOTSA SPAGHETTI');
}
});

client.on('message', (message) => {
  if(message.content.includes('rem')) {
   message.reply('whos Rem');
}
});

client.on('message', (message) => {
  if(message.content.includes('unseen hand')) {
   message.reply('MY BRAIN. IT TREMBLES.');
}
});

client.on('message', (message) => {
  if(message.content.includes('cheese')) {
   message.reply('has the Cheese touch');
}
});

client.on('message', (message) => {
  if(message.content.includes('mexico')) {
   message.reply('Replace the M in Mexico with an S');
}
});


client.on('message', (message) => {
   if(message.content.includes('gamer')) {
    message.reply('So yeah... im a Gamer');
}
});

client.on('message', (message) => {
   if(message.content.includes('ichigo')) {
    message.reply('fuck Ichigo');
}
});

client.on('message', (message) => {
   if(message.content.includes('technology bad')) {
    message.reply('ok boomer');
}
});

client.on('message', (message) => {
   if(message.content.includes('gay')) {
    message.reply('hey hey hey thats pretty Gay');
}
});

client.on('message', (message) => {
   if(message.content.includes('send nudes')) {
    message.reply('with or without creeper head ');
}
});

client.on('message', (message) => {
   if(message.content.includes('big lion')) {
    message.reply('hes so fucking powerful');
}
});

client.on('message', (message) => {
   if(message.content.includes('who is that')) {
    message.reply('joe');
}
});

client.on('message', (message) => {
   if(message.content.includes('invisible')) {
    message.reply('well well well if it aint the Invisible cunt');
}
});

client.on('message', (message) => {
  if(message.content.includes('whos joe')) {
   message.reply('joe mama');
}
});

client.on('message', (message) => {
   if(message.content.includes('ghost')) {
    message.reply('Ghost is a sexy motherfucker');
}
});

client.on('message', (message) => {
  if(message.content.includes('you came')) {
   message.reply('thats what she said');
}
});

client.on('message', (message) => {
  if(message.content.includes('F-mega')) {
   message.reply('Serect yur ker');
}
});

client.login(auth.token);
