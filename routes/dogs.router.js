const express = require("express");
const body_parser = require("body-parser");

// models
const Dogs = require("../models/dogs");

const dogsRouter = express.Router();

dogsRouter.use(body_parser.json());

dogsRouter.get("/", (req, res)=>{
    //res.send("Showing all the dogs");
    Dogs.find({}).then((dogs)=>{
        res.json(dogs);
    })
});

dogsRouter.post("/", (req, res)=>{
    Dogs.create(req.body).then((resp)=>{
        //res.send("New dog added.");
        res.json(req.body);
    });
});


dogsRouter.put("/", (req, res)=>{
    res.send("PUT does not supports by this route.....");
});


dogsRouter.delete("/", (req, res)=>{
    Dogs.remove().then((resp)=>{
        res.send("All dogs data are deleted..");
    })
});

dogsRouter.get("/:id", (req, res)=>{
    Dogs.findById(req.params.id).then((dog)=>{
            res.json(dog);
    }).catch((err)=>{
        res.send("No data found");
    })
    //res.send("Showing dog id/name : "+req.params.id);
});


dogsRouter.put("/:id", (req, res)=>{
    Dogs.updateOne({_id: req.params.id}, req.body).then((resp)=>{
        res.send("Id : "+req.params.id+" is updated");
    }).catch((err)=>{
        res.send("No existing data found");
    })
    //res.send("Updating dog id/name : "+req.params.id);
});


dogsRouter.post("/:id", (req, res)=>{
    res.send("POST does not supported by this route.");
});


dogsRouter.delete("/:id", (req, res)=>{
    Dogs.findByIdAndRemove(req.params.id).then((resp)=>{
        res.send("Id : "+req.params.id+" is deleted.");
    }).catch((err)=>{
        res.send("No existing data found");
    });
});



module.exports = dogsRouter;