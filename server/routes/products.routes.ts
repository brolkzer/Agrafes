import { Express, Request, Response } from "express";
import { getAllProducts, getProductById, getProductsBySubtype, getProductsByType, getRandomProduct } from "../controllers/products.controllers";

function productsRoutes (app: Express) {
    app.get('/api/products', getAllProducts);
    app.get('/api/products/type/:type', getProductsByType);
    app.get('/api/products/subtype/:subtype', getProductsBySubtype)
    app.get('/api/product/:id', getProductById)
    app.get('/api/product/random', getRandomProduct)
}

export default productsRoutes