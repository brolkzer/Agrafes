const express = require("express");
const productsRoutes = require("./routes/productsRoutes");
require("dotenv").config({ path: "./config/.env" });
require("./config/database");

const app = express();

// routes

app.use("/api/products", productsRoutes);

// serveur

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(process.env.PORT, () => {
  console.log(`Connecté sur le port ${process.env.PORT}`);
});
