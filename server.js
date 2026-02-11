const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("✅ MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/auth", require("./routes/authRoutes"));
app.use("/events", require("./routes/eventRoutes"));
app.use("/participants", require("./routes/participantRoutes"));
app.use("/checkin", require("./routes/checkinRoutes"));

app.listen(process.env.PORT, ()=>{
    console.log("🔥 Server running on port", process.env.PORT);
});
