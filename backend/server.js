const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB(){
    await client.connect();
    db = client.db("portfolio");
    console.log("MongoDB Connected");
}
connectDB();

app.get("/",(req,res)=>{
    res.send("Server Running");
});

app.post("/contact", async(req,res)=>{
    try{
        await db.collection("contacts").insertOne(req.body);
        res.json({message:"Message saved ❤️"});
    }catch(err){
        res.status(500).json({message:"Error saving"});
    }
});

app.listen(5000,()=>console.log("Server started on port 5000"));
