// import express from 'express';
// import Product from "../models/productModel.js";

// const router=express.Router();
// router.get("/api/products",async(req,res)=>{
//     try{
//         const products = await Product.find({})
        
//     res.json(products)
//     }
//     catch(error){
//         res.json({message: "Something went wrong",})
//     }
// })
// router.get("/api/products/:id",async(req,res)=>{
//     try{
//     const product=await Product.findById(req.params.id)
//     res.json(product)
//     }
//     catch(error){
//         console.log(error)
//         res.json({message: "Product not found",})
//     }
// })

// export default router

import express  from 'express'
import {protect,admin} from "../middleware/authMiddleware.js"
import { createProduct,deleteProduct,getProductById,getProducts, } from '../controllers/productControllers.js' 
const router=express.Router()
router.route("/").get(getProducts).post(protect,admin,createProduct)
router.route("/:id").get(getProductById).put(protect,admin).delete(protect,admin,deleteProduct)
export default router