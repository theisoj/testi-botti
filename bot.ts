import { config } from "dotenv"
config()

import { Client, Events, GatewayIntentBits } from "discord.js"
const token = process.env.TOKEN

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
})

client.once(Events.ClientReady, discordClient => {
    console.log(`Moro! Se on ${discordClient.user.username} tässä terve!`)
})

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return

    switch (interaction.commandName) {
        case "käyttäjä":
            interaction.reply(`
                Käyttäjän tiedot:
                ${JSON.stringify(interaction.user, null, 2)}
            `)
            break
        case "ping":
            interaction.reply("pong")
            break
        case "exit":
            process.exit(0)
    }
})

client.login(token)