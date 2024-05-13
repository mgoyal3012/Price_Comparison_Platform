import mongoose from "mongoose";
const OrderSchema=mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    orderItems:
    [{
        name:{type:String,required:true},
        image:{type:String,required:true},
        price_lowest:{type:String,required:true},
        price_highest:{type:String,required:true},
        product:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"Product"}
    }]
    
},
{
    timestamps:true,
})


const Order=mongoose.model("Order",OrderSchema)
export default Order