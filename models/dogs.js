const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogsSchema = new Schema({
    name: { types: String},
    age: { types: Number},
    description: { type: String}
},
    {
        timestamps: true
    });

const Dogs = mongoose.model("Dogs", dogsSchema);

module.exports = Dogs;