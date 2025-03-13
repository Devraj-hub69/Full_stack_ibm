const express =require("express");
//console.log(express);
const PORT=8080;
const app=express();
app.use(express.json());
const data=[
 {"name":"aman","age":20},
 {"name":"naman","age":34}   
]
app.get("/",(req,res)=>{
    res.status(200).send("<h1>wellcome to svu backend server .!!!</h1>")
});
app.get("/data",(req,res)=>{
    res.status(200).send(data);
});
app.post("/login",(req,res)=>{
    //console.log(req.body);
    if(req.body.email=="submangil@gamil.com" && req.body.password==1234){
        res.status(200).send({"message":"user authentication success" })
    }
    else{
      res.status(400).send({"messege":"incorrect faild authentication"})      
    }
});
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})
