const mongoose=require("mongoose");

const productsSchema=mongoose.Schema({
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    image:{
        
    }
})