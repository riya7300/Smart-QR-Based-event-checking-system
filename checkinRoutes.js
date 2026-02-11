const router = require("express").Router();
const Participant = require("../models/Participant");

router.post("/", async(req,res)=>{

    const token = req.body.token;

    const participant =
        await Participant.findOneAndUpdate(

            {qrTokenHash:token, checkedIn:false},
            {checkedIn:true},
            {new:true}
        );

    if(!participant)
        return res.send(
            "❌ Invalid OR Already Checked-In"
        );

    res.send("✅ Check-in Successful");
});

module.exports = router;
