const mongoose = require("mongoose");
const StuModel = mongoose.Schema({
     Email: {
        type :String,
        required : true,
        unique : true
     },
     Name: {
        type:String ,
        required:true,
        unique:false
     },
     Class:{
        type:String ,
        required:true ,
        unique:false
     },
     Section: {
        type:String,
        required:true ,
        unique:false
     },
     Enrollment_Number : {
         type:String,
         required:true ,
         unique:true
     },
     firstInstallment:{
        type:Number,
        required:true,
        unique:false
     },
     secondInstallment:{
        type:Number,
        required :true,
        unique:false
     },
     thirdInstallment:{
        type:Number ,
        required:true ,
        unique:false
     },
     fourthInstallment:{
        type:Number ,
        required:true ,
        unique:false
     },
     firstPaid:{
        type:Boolean ,
        required:true ,
        unique:false
     },
     secondPaid:{
        type:Boolean ,
        required:true ,
        unique:false
     },
     thirdPaid:{
        type:Boolean ,
        required:true ,
        unique:false
     },
     fourthPaid:{
        type:Boolean ,
        required:true ,
        unique:false
     }
})

module.exports = mongoose.model("StudentData" , StuModel);