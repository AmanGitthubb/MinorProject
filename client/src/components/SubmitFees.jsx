import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {message} from "antd"


const SubmitFees = () => {

   const [enrollment_Number , setenrollment_Number ] = useState("");
   const [mydata , setMydata] = useState({});
   const [feesstatus , setfeesstatus] = useState(false);
   const [feesPaymentpage, setFeesPaymentPage] = useState(false);
   const [lateFees , setLateFees ] = useState(0)
   const[wholePage , setwholePage] = useState(true);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      const API = `http://localhost:8000/student/stufindEnrollment`
      axios.post(API , {Enrollment_Number:enrollment_Number}).then((res)=> {

        if (Object.keys(res.data).length) {
          setMydata(res.data)
          setfeesstatus(true)
        }
        else {
           message.error("Enrollment Number Not Found");
        }
      })
  }

  const handlePage = () => {
      setFeesPaymentPage(true);
      setwholePage(false)
  }

   const checkStatus = (paid) => {
          if (paid) {
              return (
                 <>
                  <p style={{color:"green" , fontWeight:"700"}}>Paid</p>
                 </>
              )
          }
          else {
              return (
                 <>
                  <div style={{display:"flex" , justifyContent:"center"}}>
                       <button onClick={()=>{handlePage()}} style={{backgroundColor:"red" , color:"white" , border:"1px solid black" , borderRadius:"5px" , padding:"0px 5px"}}>Pay Fee</button>
                  </div>
                 </>
              )
          }
   }

   const ShowWholePage = (page) => {
        if (!page) {
          return "none"
        }
   }

   const status = (displayBlock) => {
      if (!displayBlock) return "none"
   }

   const feespage = (paymentPage) => {
         if (!paymentPage){
             return "none"
         }
         else {
          return"flex"
         }
   }

   const checkInstallment = () => {
           if (!mydata.firstPaid) {
              return <h3> Fees For The First Installment : </h3>
           }
          else if (!mydata.secondPaid) {
            return <h3> Fees For The Second Installment : </h3>
         }
         else if (!mydata.thirdPaid) {
            return <h3>Fees for the Third Installment : </h3>
         }
         else {
            return  <h3>Fees for the Fourth Installment : </h3>

         }
   }

   const installmentNumber = () => {
         if (!mydata.firstPaid) { 
           return "firstPaid"
         }
         else if (!mydata.secondPaid) {
           return "secondPaid"
         }
         else if (!mydata.thirdPaid) {
           return "thirdPaid"
         }
         else {
            return "forthPaid"
         }
   }

   

   const feesSubmission = () => {
       setFeesPaymentPage(false);
       const API = `http://localhost:8000/student/stuFeesSave`
       const installmentN = installmentNumber();
       axios.post(API , {...mydata , [installmentN]:true})
       message.success("Successfully Paid")
       navigate("/feessubmit")
   }

   return (
     <div style={{overflowX:"hidden" , overflowY:"hidden"}}>

<div style={{position:"absolute" , height:"60vh" , width:"80vw" , display:feespage(feesPaymentpage) , justifyContent:"center" , alignItems:"center" , zIndex:"2" , overflowX:"hidden" , overflowY:"hidden" }}>
                   <div style={{ position:"relative" , left:"150px" ,top:"50px",padding:"20px" , border:"2px solid grey" , backgroundColor:"lightblue" , width:"50vw" , height:"45vh", borderRadius:"20px"}}>
                      <h1 style={{textDecoration:"underline"}}> Fees Payment Page</h1>
                      <hr/>
                      <div style={{display:"flex" , gap:"5px"}}>
                         {checkInstallment()}
                         <h3>{mydata.firstInstallment}</h3>
                      </div>
                      <div>
                          <label style={{fontSize:"22px" , fontWeight:"600" , padding:"0px 5px"}}> Late fees : </label>
                          <input type="text" value={lateFees} onChange={(e)=>setLateFees(e.target.value)}  />
                          <br />
                          <label style={{fontSize:"20px" , fontWeight:"600" , padding:"0px 5px"}}> Total Amount  To Pay </label>
                           <input type="text" value={parseInt(mydata.firstInstallment) + parseInt(lateFees)} />
                           <br />
                        <label htmlFor='paymentMode' style={{fontSize:"20px" , fontWeight:"600" , padding:"0px 5px"}}> Choose Payment Mode : </label>
                         <select id="paymentMode" style={{padding:"0px 5px"}}>
                            <option> Check Payment</option>
                            <option> Online Payment</option>
                            <option> Card Payment</option>
                            <option> Cash Payment</option>
                         </select>
                      </div>
                      <hr />
                      <Button variant='primary' onClick={feesSubmission}>Paid</Button>
                   </div>
      </div>
  
   <div style={{display:ShowWholePage(wholePage)}}>
      <h1 style={{textAlign:"center"}}> SubmitFees Page </h1>
      <div style={{height:"25vh" , width:"100vw" , display:"flex" , justifyContent:"center" , alignItems:"center", gap:"20px", flexDirection:"column"}} >
    <div style={{border:"2px solid grey" , borderRadius:"10px",backgroundColor:"lightblue", padding:"30px" , display:"flex" , flexDirection:"column" , gap:"20px"}}>    
        <div style={{padding:"5px 10px"}}>
             <label style={{fontSize:"20px"}}> Enter the Enrollment Number : </label>
             <input type="text" value={enrollment_Number} onChange={(e)=>{setenrollment_Number(e.target.value)}} />
        </div> 
           <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , padding:"5px 10px" }}> 
             <Button variant="primary" onClick={handleSubmit}>Submit</Button>
             </div> 
             </div>       
      </div>

      <div style={{padding:"30px" , display:status(feesstatus)}}>
          <h3 style={{textDecoration:"underline" , padding:"10px"}}> Fees Status of The Student </h3>
          <table border="2" style={{width:"95vw"}}>
              <thead  style={{backgroundColor:"lightblue"}}>

                 <th style={{border:"2px  solid grey"}}>Name</th>
                 <th style={{border:"2px  solid grey"}}>Email</th>
                 <th style={{border:"2px  solid grey"}}>Class</th>
                 <th style={{border:"2px  solid grey"}}>FirstInstallment</th>
                 <th style={{border:"2px  solid grey"}}>SecondInstallment</th>
                 <th style={{border:"2px  solid grey"}}>ThirdInstallment</th>
                 <th style={{border:"2px  solid grey"}} >ForthInstallment</th>
              </thead>
              <tbody style={{border:"2px solid grey"}}>
                  <tr>
                     <td style={{border:"2px  solid grey"}}>{mydata.Name}</td>
                     <td style={{border:"2px  solid grey"}}>{mydata.Email}</td>
                     <td style={{border:"2px  solid grey"}} >{mydata.Class + " , " +  mydata.Section}</td>
                     <td style={{border:"2px  solid grey"}}>{checkStatus(mydata.firstPaid)}</td>
                     <td style={{border:"2px  solid grey"}}>{checkStatus(mydata.secondPaid)}</td>
                     <td style={{border:"2px  solid grey"}} >{checkStatus(mydata.thirdPaid)}</td>
                     <td style={{border:"2px  solid grey"}}>{checkStatus(mydata.forthPaid)}</td>
                  </tr>
              </tbody>
          </table>
      </div>

     </div> 

      
     </div>
   )
}
export default SubmitFees;