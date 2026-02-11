const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// REGISTER
router.post("/register", async(req,res)=>{

    const hashedPassword =
        await bcrypt.hash(req.body.password,10);

    const admin = await Admin.create({
        email:req.body.email,
        password:hashedPassword
    });

    res.send(admin);
});


// LOGIN
router.post("/login", async(req,res)=>{

    const admin =
        await Admin.findOne({email:req.body.email});

    if(!admin)
        return res.status(400).send("Invalid Email");

    const valid =
        await bcrypt.compare(
            req.body.password,
            admin.password
        );

    if(!valid)
        return res.status(400).send("Wrong Password");

    const token = jwt.sign(
        {id:admin._id},
        process.env.JWT_SECRET
    );

    res.json({token});
});

module.exports = router;
