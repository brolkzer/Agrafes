const ProductModel = require("../models/productsModel");

module.exports.getProducts = async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).json(products);
};
