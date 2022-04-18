const express = require("express");

// models
const Dogs = require("../models/dogs");

const dogsRouter = express.Router();

dogsRouter.get("/", (req, res)=>{
    res.send("Showing all the dogs");
});

dogsRouter.put("/", (req, res)=>{
    res.send("PUT does not supports by this route.....");
});


dogsRouter.post("/", (req, res)=>{
    res.send("New dogs is added.");
});


dogsRouter.delete("/", (req, res)=>{
    res.send("All the dogs are deleted.");
});

dogsRouter.get("/:id", (req, res)=>{
    res.send("Showing dog id/name : "+req.params.id);
});


dogsRouter.put("/:id", (req, res)=>{
    res.send("Updating dog id/name : "+req.params.id);
});


dogsRouter.post("/:id", (req, res)=>{
    res.send("POST does not supported by this route.");
});


dogsRouter.delete("/:id", (req, res)=>{
    res.send("Deleted dogs id : "+req.params.id);
});



module.exports = dogsRouter;