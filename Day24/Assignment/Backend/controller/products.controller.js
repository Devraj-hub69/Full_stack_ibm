const express=require("express")
const data=[
    {
        "name":"svu","place":"bp"
    },
    {
        "name":"titu","place":"kolkata"
    }
]
const getproduct=(req,res)=>{
    res.status(200).send({message:"data successfull",data:data})
};
module.exports={
    getproduct
}