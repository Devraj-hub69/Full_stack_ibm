const express = require('express');
const products = require("./data");
const app = express();
const PORT = 3000;
app.use(express.json());
const fs=require("fs");
const {logSystemInfo}=require("./utils/systemInfo")
const crypto = require('crypto');
const logRequest = require('./logger')
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Store");
})
app.get("/products", (req, res) => {
    res.status(200).send(products)
})
app.get("/products/:id", (req, res) => {
    let { id } = req.params;
    let product = products.find((p) => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ message: "product not found" })
    }
    res.json(product);
})
app.post("/products", (req, res) => {
    let { title, price, category } = req.body;
    products.push({ title, price, category });
    res.send("Adding product success");
})
app.put("/products/:id", (req, res) => {
    let { id } = req.params;
    let { title, price, category } = req.body;
    let product = products.findIndex((p) => id === p.id);
    // products[product]={title,price,category}
    products[product] = { ...products[product], title, price, category };
    res.json(products[product])
    res.send("Update complete");
})
app.delete("/products/:id", (req, res) => {
    let { id } = req.params;
    let deletion = products.filter((p) => id !== p.id);
    // fs.writeFileSync(path.join(__dirname, 'products.json'), 
    JSON.stringify(deletion, null, 2);
    res.json({ message: 'Product deleted successfully' })
    res.send("delete complete");
})
logSystemInfo();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

