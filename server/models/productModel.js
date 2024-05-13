import mongoose from "mongoose";
const productSchema=mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required: true
    },
    brand:{
        type:String,
        required: true
    },
    price_lowest:{
        type:String,
        required: true
    },
    price_highest:{
        type:String,
        required: true
    },
    image_link:{
        type:String,
        required: true
    },
    website_link1:{
        type:String,
        required: true
    },
    website_link2:{
        type:String,
        required: true
    },
    website_link3:{
        type:String,
        required: true
    },
    website_link4:{
        type:String,
        required: true
    },
    website_link5:{
        type:String,
        required: true
    },
    price1:{
        type:String,
        required: true
    },
    price2:{
        type:String,
        required: true
    },
    price3:{
        type:String,
        required: true
    },
    price4:{
        type:String,
        required: true
    },
    price5:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    rating1:{
        type:Number,
        required: true
    },
    rating2:{
        type:Number,
        required: true
    },
    rating3:{
        type:Number,
        required: true
    },
    rating4:{
        type:Number,
        required: true
    },
    rating5:{
        type:Number,
        required: true
    },
    category:{
        type:String,
        required:true
    },
},
{
    timestamps:true
}
)
const Product=mongoose.model('Product',productSchema)
export default Product