import mongoose from "mongoose";

export interface ProductDocument extends mongoose.Document {
    nom: string,
    description: string,
    prix: number,
    spec: object,
    type: string,
    subtype: string,
    img: string,
}

const productSchema = new mongoose.Schema({
    nom: {type: String},
    description: {type: String},
    prix: {type: Number},
    spec: {type: Object},
    type: {type: String},
    subtype: {type: String},
    img: {type: String}
})

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel