const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/FeesManagementSystem").then(()=> {
     console.log("MongoDB is Connected")
})
const StuRoute = require("./routes/StuRoute")
app.use("/student" ,  StuRoute)


app.listen(PORT , () => {
     console.log(`Server is live on ${PORT}`)
})


