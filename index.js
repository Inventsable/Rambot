require("dotenv").config();
const { Client, MessageAttachment } = require("discord.js");
const client = new Client();

client.on("message", (message) => {
  if (/rambot/i.test(message.content)) {
    message.react("👀");
  }
});

client.login(process.env.CLIENT_TOKEN);
