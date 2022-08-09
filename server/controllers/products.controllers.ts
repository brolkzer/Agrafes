import { Request, Response } from "express";
import ProductModel from "../models/products.models";
import logger from "../utils/logger";

export async function getAllProducts (req: Request, res: Response) {
    try {
        const products = await ProductModel.find();

        if (!products) return res.status(404).json('Products not found')
        else if (products) return res.status(200).json(products)
    }
    catch (error: any) {
        logger.error('Could not get PRODUCTS' + error)
        return res.status(404).json(error.message)
    }
}

export async function getProductsByType (req: Request, res: Response) {
    try {
        const product = await ProductModel.find({ type: req.params.type })

        if (!product) return res.status(404).json('Product not found')
        else if (product) return res.status(200).json(product)
    }
    catch (error: any) {
        logger.error('Could not get PRODUCT' + error)
        return res.status(404).json(error.message)
    }
}

export async function getProductsBySubtype (req: Request, res: Response) {
    try {
        const product = await ProductModel.find({ subtype: req.params.subtype })

        if (!product) return res.status(404).json('Product not found')
        else if (product) return res.status(200).json(product)
    }
    catch (error: any) {
        logger.error('Could not get PRODUCT' + error)
        return res.status(404).json(error.message)
    }
}

export async function getRandomProduct (req: Request, res: Response) {
    try {        
        const products = await ProductModel.find();

        if (!products) return res.status(404).json('Products not found')
        else if (products) return res.status(200).json(products[Math.floor(Math.random() * (products.length - 1))])
    }  
    catch (error: any) {
        logger.error('Could not get PRODUCT' + error)
        return res.status(404).json(error.message)
    }
}

export async function getProductById (req: Request, res: Response) {
    try {
        const product = await ProductModel.find({ _id: req.params.id })

        if (!product) return res.status(404).json('Product not found')
        else if (product) return res.status(200).json(product)
    }
    catch (error: any) {
        logger.error('Could not get PRODUCT' + error)
        return res.status(404).json(error.message)
    }
}