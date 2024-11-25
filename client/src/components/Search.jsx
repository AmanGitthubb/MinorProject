import { Button } from "react-bootstrap"
import { useState } from "react"
import axios from "axios";
import {message} from "antd"
const Search = () => {

  const [Enrollement , setenrollment_Number] = useState("");
  const [mydata , setMydata] = useState({});
  const [feesstatus , setfeesstatus ] = useState(false);

  const handleSubmit = (e) => {
       e.preventDefault();
       const API = `http://localhost:8000/student/stuSearch`;
       axios.post(API , {"Enrollment_Number" : Enrollement}).then((res)=> {
           if (res.data) {
            setMydata(res.data);
           setfeesstatus(true);
           }
           else {
            message.error("Enrollment is Incorrect")
           }
       })
  }
     
    const status  = (ress) => {
          if (!ress) {
              return "none"
          }
          return "block"
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
                    <p style={{color:"red" , fontWeight:"700"}}> Not Paid</p>
                </div>
               </>
            )
        }
 }

     return (
         <>
             <h1 style={{textAlign:"center"}}>Search Page</h1>
             <div style={{width:"100vw" , height:"40vh", display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <div style={{border:"2px solid grey" , height:"25vh" , width:"50vw" , padding:"50px" , display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , gap:"20px" , backgroundColor:"lightblue" , borderRadius:"20px"}}>
              <div>
                <label style={{fontSize:"20px" , fontWeight:"500px"}}> Enter the Enrollement Number : </label>
                <input type="text" value={Enrollement} onChange={(e)=>{setenrollment_Number(e.target.value)}}/>
              </div>    
                <Button variant="primary" onClick={(e)=>{handleSubmit(e)}}> 
                    Search
                </Button>
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
 

         </>
     )
}
export default Search