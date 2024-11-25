const express = require("express");
const route = express.Router();
const stuController = require("../controller/StuController");

route.post("/stusave" , stuController.stuSave);

route.get("/stuDisplay" , stuController.stuDisplay);

route.post("/stufindEnrollment" , stuController.findEnrollment);

route.post("/stuFeesSave" , stuController.FeesSave)

route.post("/stuDelete" , stuController.StuDelete)

route.post("/stuSearch" , stuController.StuSearch)


module.exports = route;

