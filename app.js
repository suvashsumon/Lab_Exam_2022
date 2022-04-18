// modules.

const express = require("express");
const mongoose = require('mongoose');

// routers
const dogsRouter = require("./routes/dogs.router");


const app = express();
const PORT = 3000;

// databse connection
const localDatabaseUrl = "mongodb://127.0.0.1:27017/labexam";
const remoteDatabaseUrl = "mongodb+srv://suvashkumar:VoR65e2i86fYalCR@cluster0.dzm1b.mongodb.net/labexam?retryWrites=true&w=majority";
const conn = mongoose.connect(remoteDatabaseUrl);
conn.then(()=>{
    console.log("Database server connected....");
}, (err)=>{
    console.log("ERROR : error occured during connecting to database.");
})

// routes
app.use("/api/dogs", dogsRouter);

app.listen(PORT, (req, res)=>{
    console.log("Server is running....");
});