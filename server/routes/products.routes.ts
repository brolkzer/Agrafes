import { Express, Request, Response } from "express";
import { getAllProducts, getProductsBySubtype, getProductsByType } from "../controllers/products.controllers";

function productsRoutes (app: Express) {
    app.get('/api/products', getAllProducts);
    app.get('/api/products/type/:type', getProductsByType);
    app.get('/api/products/subtype/:subtype', getProductsBySubtype)
}

export default productsRoutes