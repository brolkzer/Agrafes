const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config/.env" });

const client = new MongoClient(process.env.db);

module.exports.getAllCollections = async (req, res) => {
  const db = client.db("Papeterie");
  const collection1 = db.collection("papiers");
  const findResult1 = await collection1.find({}).toArray();
  const collection2 = db.collection("agendas-calendriers");
  const findResult2 = await collection2.find({}).toArray();
  const collection3 = db.collection("cahiers-blocs-notes");
  const findResult3 = await collection3.find({}).toArray();
  const collection4 = db.collection("courriers");
  const findResult4 = await collection4.find({}).toArray();
  const findAllResult = [
    { findResult1 },
    { findResult2 },
    { findResult3 },
    { findResult4 },
  ];

  res.status(200).json(findAllResult);
};

module.exports.getPapiers = async (req, res) => {
  const db = client.db("Papeterie");
  const collection = db.collection("papiers");
  const findResult = await collection.find({}).toArray();

  res.status(200).json(findResult);
};

module.exports.getAgendasCalendriers = async (req, res) => {
  const db = client.db("Papeterie");
  const collection = db.collection("agendas-calendriers");
  const findResult = await collection.find({}).toArray();

  res.status(200).json(findResult);
};

module.exports.getCahiersBlocsNotes = async (req, res) => {
  const db = client.db("Papeterie");
  const collection = db.collection("cahiers-blocs-notes");
  const findResult = await collection.find({}).toArray();

  res.status(200).json(findResult);
};

module.exports.getCourriers = async (req, res) => {
  const db = client.db("Papeterie");
  const collection = db.collection("courriers");
  const findResult = await collection.find({}).toArray();

  res.status(200).json(findResult);
};
