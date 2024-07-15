const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productRouter = require("./router/productRouter");
// mongoose.connect("mongodb+srv://Souvik:yMBJbq3dujYeAWHV@cluster0.xh8kira.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const mongodburi = process.env.MONGODB_URI;
mongoose.connect(mongodburi);
const db = mongoose.connection;
const app = express();

const port = 3000;

db.on("error", console.error.bind(console,"MongoDB connection error"));
db.once("open", ()=>{
    console.log("Connected to the database successfully");
})

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.use(express.json());
app.use(productRouter);
app.listen(
    port, ()=>{
        console.log(`The server is running on port ${port}`);
    }
)