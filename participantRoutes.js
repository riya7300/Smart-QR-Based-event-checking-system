const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const csv = require("csv-parser");
const QRCode = require("qrcode");

const Participant = require("../models/Participant");
const generateToken = require("../utils/generateToken");

const upload = multer({dest:"uploads/"});


// CSV Upload
router.post(
"/upload/:eventId",
upload.single("file"),
async(req,res)=>{

    const results = [];

    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data",(data)=>results.push(data))
    .on("end", async()=>{

        const bulkOps = [];

        for(const p of results){

            const token =
                generateToken(
                    req.params.eventId,
                    p.studentId
                );

            // generate QR image (optional)
            await QRCode.toDataURL(token);

            bulkOps.push({
                insertOne:{
                    document:{
                        eventId:req.params.eventId,
                        name:p.name,
                        email:p.email,
                        studentId:p.studentId,
                        qrTokenHash:token
                    }
                }
            });
        }

        await Participant.bulkWrite(bulkOps);

        res.send("✅ Participants Imported");
    });
});


// LIST PARTICIPANTS
router.get("/:eventId", async(req,res)=>{

    const list =
        await Participant.find({
            eventId:req.params.eventId
        });

    res.send(list);
});

module.exports = router;
