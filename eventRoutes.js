const router = require("express").Router();
const Event = require("../models/Event");
const auth = require("../middleware/authMiddleware");


// CREATE EVENT
router.post("/", auth, async(req,res)=>{

    const event = await Event.create(req.body);
    res.send(event);
});


// GET EVENTS
router.get("/", async(req,res)=>{

    const events = await Event.find();
    res.send(events);
});


// DELETE EVENT
router.delete("/:id", auth, async(req,res)=>{

    await Event.findByIdAndDelete(req.params.id);
    res.send("Event Deleted");
});

module.exports = router;
