
require('dotenv').config();


const express = require('express'); 
const {connectDB} = require('./configs/db'); 
const authRoutes = require('./routes/authRoutes'); 
const {protect} = require('./middleware/authMiddleware'); 
const cors=require("cors");
const { productRouter } = require('./routes/products.routs');

const app = express(); 
app.use(express.json());
app.use(cors()) 

app.use('/api/auth', authRoutes); 
app.use("/api/products",productRouter);
// app.use(auth)

app.get('/api/protected', protect, (req, res) => { 
    res.json({ message: 'This is a protected route', user: req.user }); 
}); 

const PORT = 8080; 
app.listen(PORT, async()=>{ 
   try { 
        await connectDB ();
        console.log("DB is connected"); 
        console.log(`Server is running at http://localhost:${PORT}`); 
   } catch (error) { 
        console.log(error.message); 
   } 
});