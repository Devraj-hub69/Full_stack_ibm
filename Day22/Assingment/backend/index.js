const express = require('express'); 
const products = require("./data");
const app = express(); 
const PORT = 3000; 
app.use(express.json()); 

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Store");
})
app.get("/products",(req,res)=>{
    res.status(200).send(products)
})
app.get("/products/:id",(req,res)=>{
    let {id}=req.params;
    let product=products.find((p)=>id===p.id);
    console.log(product)
})

// app.get("/products/:id",(req,res)=>{
//     const product=products.find((product)=>product.id==req.params.id);
//     if (product) {
//         res.json(product);
//       } else {
//         res.status(404).send({ error: "Product not found" });
        
//       }
// });

// app.post("/products",(req,res)=>{
//     const { title, price, category } = req.body; 
//     if (!title || !price || !category) { 
//        return res.status(400).json({ message: 'All fields are required' }); 
// }
// })

// app.put("/products",(req,res)=>{
//     res.status(200).send(products)
// })

// app.delete("/products",(req,res)=>{
//     res.status(200).send(products)
// })


app.listen(PORT, () => { 
console.log(`Server is running on http://localhost:${PORT}`); 
});

