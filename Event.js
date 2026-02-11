const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name:String,
    date:Date,
    location:String,
    slug:{
        type:String,
        unique:true
    }
});

module.exports = mongoose.model("Event", eventSchema);
