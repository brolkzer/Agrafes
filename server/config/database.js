const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

mongoose
  .connect(
    `mongodb+srv://${process.env.dbLogs}@cluster0.ueka0iy.mongodb.net/agrafes?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !" + err));
