const express=require("express");
const { getproduct } = require("../controller/products.controller");

const productRouter=express.Router();

productRouter.get("/products",getproduct);
module.exports={
    productRouter
}