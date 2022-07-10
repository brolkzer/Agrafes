import { Express } from "express";

const app = express();

app.listen("5000", () => {
  console.log("Le serveur est démarré sur le port 5000");
});
