const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
});

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
