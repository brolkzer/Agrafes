const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config/.env" });

const client = new MongoClient(process.env.db);

async function main() {
  await client.connect();

  return console.log("Connexion à MongoDB réussie");
}

main().then(console.log()).catch(console.error);
