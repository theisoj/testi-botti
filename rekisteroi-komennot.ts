import { config } from "dotenv"
config()

const token = process.env.DISCORD_TOKEN
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID

import { REST, Routes } from "discord.js"

const komennot = [
    {
        name: "käyttäjä",
        description: "Tietoa käyttäjästä"
    },
    {
        name: "ping",
        description: "Vastaa pong"
    },
    {
        name: "exit",
        description: "Lopettaa botin."
    }
]

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
    try {
        console.log("Rekisteröidään kauttakomennot...")

        await rest.put(
            Routes.applicationGuildCommands(
                clientId,
                guildId
            ),
            {
                body: komennot
            }
        )

        console.log("Kauttakomennot rekisteröity onnistuneesti.")
    } catch (error) {
        console.error(`Virhe: ${error}`)
    }
})()