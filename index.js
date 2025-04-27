const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//connect db
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/user"));

const port = process.env.PORT || 4001;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

//test API
app.get("/", (req,res)=>{
    res.send("API is working");
})