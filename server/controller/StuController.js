const StuModel = require("../models/StuModel");

const stuSave = async (req , res ) => {
    const {Email , Name , Class , Section , Enrollment_Number , firstInstallment , secondInstallment , thirdInstallment , fourthInstallment , firstPaid , secondPaid , thirdPaid , fourthPaid } = req.body;

   try{
      const saveRes = await StuModel.create({
        Email:Email ,
        Name:Name ,
        Class:Class ,
        Section:Section ,
        Enrollment_Number:Enrollment_Number ,
        firstInstallment:firstInstallment ,
        secondInstallment:secondInstallment ,
        thirdInstallment:thirdInstallment ,
        fourthInstallment:fourthInstallment ,
        firstPaid:firstPaid ,
        secondPaid:secondPaid ,
        thirdPaid:thirdPaid ,
        fourthPaid:fourthPaid
      })
      res.send(saveRes);
    }
    catch (err) {
         res.send(err)
    }
}

const stuDisplay = async (req , res ) => {
    const data = await StuModel.find({});
    res.send(data)
}
const findEnrollment = async (req , res ) => {
     const {Enrollment_Number } = req.body;
     try {
         const data = await StuModel.findOne({Enrollment_Number:Enrollment_Number})
         res.send(data)
     }
     catch (error) {
         res.send(error)
     }
}

const FeesSave =  async (req , res ) => {
     const {Email , Enrollment_Number , Name , _id , Class , Section , firstInstallment , secondInstallment , thirdInstallment , fourthInstallment , firstPaid , secondPaid , thirdPaid , fourthPaid} = req.body;
    
      const newData = {
             "Email":Email,
             "Enrollment_Number":Enrollment_Number,
             "Name":Name,
             "Class":Class,
             "Section":Section ,
             "firstInstallment":firstInstallment ,
             "secondInstallment":secondInstallment ,
             "thirdInstallment":thirdInstallment ,
             "fourthInstallment":fourthInstallment ,
             "firstPaid":firstPaid ,
             "secondPaid":secondPaid,
             "thirdPaid":thirdPaid ,
             "fourthPaid":fourthPaid
      }

     try {
        const ress = await StuModel.findByIdAndUpdate( _id ,newData)
        res.send(ress)
     } 
     catch (error) {
        res.send(error);
     }
}

const StuDelete = async (req , res ) => {
     const {id} = req.body;
     try {
        const deletedata = await StuModel.findByIdAndDelete(id)
        res.send(deletedata)
     }
     catch (error) {
        res.send(error);
     }
}

const StuSearch = async (req , res ) => {

    const {Enrollment_Number } = req.body;
    try {
        const data = await StuModel.findOne({Enrollment_Number:Enrollment_Number})
        res.send(data)
    }
    catch (error) {
        res.send(error)
    }
}

module.exports= {
     stuSave,
     stuDisplay,
     findEnrollment,
     FeesSave,
     StuDelete,
     StuSearch
}