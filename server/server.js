const express = require("express");
const papeterieRoutes = require("./routes/papeterieRoutes");
require("dotenv").config({ path: "./config/.env" });
require("./config/database");

const app = express();

// routes

app.use("/api/products/papeterie", papeterieRoutes);

// serveur

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(process.env.PORT, () => {
  console.log(`Connecté sur le port ${process.env.PORT}`);
});
