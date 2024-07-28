require("dotenv").config()
const { Intents } = require("discord.js");
const Client = require("./Structures/Client.js");
const express = require('express');
const app = express();
app.listen(() => console.log("☺ ﻲﺒﻨﻟﺍ ﻰﻠﻋ ﻲﻠﺻ ﻙﺮﻛﺫﺍ"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1><h1><p>Made by : ' Hadaf ,</p>
  </body>`)
});
const client = new Client({
  partials: ['MESSAGE', 'CHANNEL'],
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ],
});

module.exports = client;

require("./Structures/Event")(client)
require("./Structures/slashCommand")(client)

client.login(process.env.TOKEN);