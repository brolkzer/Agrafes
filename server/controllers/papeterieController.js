const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config/.env" });

const client = new MongoClient(process.env.db);

module.exports.getProducts = async (req, res) => {
  const db = client.db("fournituresDeBureau");
  const collection = db.collection("colles");
  const findResult = await collection.find({}).toArray();

  res.status(200).json(findResult);
};
