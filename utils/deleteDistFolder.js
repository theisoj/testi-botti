import fs from "fs/promises"

async function main() {
    const folder = await fs.rm("./dist", { recursive: true, force: true })

    if (folder == null) {
        console.error("Kansiota ei ole olemassa. Oletko poistanut sen jo?")
        process.exit(1)
    } else {
        console.log("dist-kansio poistettu.")
    }
}

main()