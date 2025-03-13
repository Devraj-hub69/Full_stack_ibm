const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red;">wellcome to our backend..!!</h1>`)
});

app.use(userRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
