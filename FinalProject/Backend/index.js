const express=require(`express`);
const { connectDB } = require("./configs/db");
const userRouter = require("./routes/user.route");
const app=express();

const cors=require("cors")
 
const path=require("path")

app.set("Frontend",path.join(__dirname,"Frontend"));
// app.use(express.static(path.join(__dirname,"Frontend")));

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("wellcome to server")
});

app.use(userRouter);

const PORT=8080;
app.listen(PORT,async()=>{
    try{
        await connectDB
        console.log("Database is connected");
        console.log(`server running at localhost:${PORT}`);
    }
    catch(e){
        console.log(e);
        
    }
    
})