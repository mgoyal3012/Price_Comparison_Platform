import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
const getProducts=asyncHandler(async(req,res)=>{
    const keyword=req.query.keyword 
    ? {
        name:{
            $regex: req.query.keyword,
            $options: "i"
        }
    }:{}
    const products=await Product.find({...keyword})
    res.json(products)

})
const getProductById=asyncHandler(async(req,res)=>{
    console.log(req.params.id);
    const product =await Product.findById(req.params.id)
    
    if(product){
        
            res.json(product)
    }else{
            res.status(404)
            throw new Error("Product not found")
    }
})

const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        user: req.user._id,
        brand: "lakme",
        name: "Lakme Absolute Explore Eyeshadow Purple Haze",
        price_lowest: "498",
        price_highest:"915",
        image_link: "https://www.lakmeindia.com/cdn/shop/products/29405_H-8901030919237_1000x.jpg?v=1665139511",
        website_link1: "https://www.lakmeindia.com/products/lakme-absolute-explore-eye-shadow-10g?variant=40143888384135",
        website_link2: "https://www.flipkart.com/lakm-absolute-explore-eye-shadow-10-g/p/itm01b735216d85a",
        website_link3: "https://www.nykaa.com/lakme-absolute-explore-eye-shadow-palette/p/7999356?skuId=7999342",
        website_link4: "https://www.tirabeauty.com/product/lakme-absolute-explore-eye-shadow-palette---purple-haze-10g-vbqbl1towkn",
        website_link5: "https://www.ajio.com/lakme-absolute-explore-eye-shadow-palette--purple-haze/p/4936938550_purplehaze",
        price1:"795",
        price2:"915",
        price3:"746",
        price4:"746",
        price5:"498",
        description: "With an excellent color pay-off and an easy-to-blend formula, this eye shadow palette gives you a velvety smooth finish that you’ve been craving for.",
        rating1: 3.7,
        rating2: 3.9,
        rating3: 3.6,
        rating4: 3.7,
        rating5: 3.9,
        category: "eyeshadow",
    })
    
      
    const createdProduct = product.save()
    res.status(201).json(createdProduct)
})
const deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id
  
    const product = await Product.findById(productId)
  
    if (product) {
      await Product.deleteOne({ _id: product._id })
      res.status(204).json({ message: "Product Deleted" })
    } else {
      res.status(404)
      throw new Error("Product Not Found")
    }
  })
export {getProducts,getProductById,createProduct,deleteProduct}