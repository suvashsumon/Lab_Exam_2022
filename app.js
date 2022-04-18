const express = require("express");
const dogsRouter = require("./routes/dogs.router");

const app = express();

const PORT = 3000;

app.use("/api/dogs", dogsRouter);

app.listen(PORT, (req, res)=>{
    console.log("Server is running....");
});