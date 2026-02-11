const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({

    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event"
    },

    name:String,
    email:String,
    studentId:String,

    qrTokenHash:String,

    checkedIn:{
        type:Boolean,
        default:false
    }
});

// 🔥 Compound Index
participantSchema.index(
    {eventId:1, studentId:1},
    {unique:true}
);

// 🔥 Fast email search
participantSchema.index(
    {eventId:1, email:1}
);

// 🔥 Ultra-fast QR scan lookup
participantSchema.index(
    {qrTokenHash:"hashed"}
);

module.exports = mongoose.model("Participant", participantSchema);
