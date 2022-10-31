require("dotenv").config();
const { Client, MessageAttachment } = require("discord.js");
const client = new Client();

client.on("message", (message) => {
  /**
   * To see what the message has available, try logging it to console:
   */
  // console.log(message);

  if (message.author.bot) return null; // We don't want our bot to care about / interfere with other bots

  if (/rambot/i.test(message.content)) {
    message.react("👀");
  }
  if (/^ping$/i.test(message.content)) {
    message.reply("pong");
  }
});

client.login(process.env.CLIENT_TOKEN);
