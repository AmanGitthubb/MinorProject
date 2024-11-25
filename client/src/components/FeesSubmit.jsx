import axios from "axios";
import { useState , useEffect } from "react"
import Table from 'react-bootstrap/Table';
const FeesSubmitted = () => {

      const [mydata , setMydata] = useState([]);
      
      const loadData = async () => {
          const API = "http://localhost:8000/student/stuDisplay";
          const res = await axios.get(API);
          setMydata(res.data)
      }
      let sno = 0;
         
      useEffect(()=> {
          loadData();
      } ,[])

      const Status = (res) => {
             if (res) {
                return (
                     <>
                         <text style={{color:"green" , fontWeight:"700"}}>Paid</text>
                      </>
                )
             }
             else {
                 return (
                     <>
                      <text style={{color:"red" , fontWeight:"600"}}> Not Paid</text>
                     </>
                 )
             }
      }

     return (
         <div style={{padding:"20px"}}>

         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Enrollment</th>
          <th>Name</th>
          <th>Email</th>
          <th>Class</th>
          <th>FirstInstallment</th>
          <th>Status</th>
          <th>SecondInstallment</th>
          <th>Status</th>
          <th>ThirdInstallment</th>
          <th>Status</th>
          <th>FourthInstallment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
          {  mydata.map((key)=> {
              sno++;
              return (
                 <>
                    <tr> 
                      <td> {sno}</td>  
                      <td>{key.Enrollment_Number} </td>  
                      <td> {key.Name} </td>  
                      <td> {key.Email} </td>  
                      <td>{key.Class + " , " + key.Section}</td>
                      <td> {key.firstInstallment} </td>  
                      <td> {Status(key.firstPaid)} </td>  
                      <td> {key.secondInstallment} </td>  
                      <td> {Status(key.secondPaid)} </td>  
                      <td> {key.thirdInstallment} </td>  
                      <td> {Status(key.thirdPaid)} </td>  
                      <td> {key.fourthInstallment} </td>  
                      <td> {Status(key.fourthPaid)} </td>  
                    </tr>
                 </>
              )
          })  }
      </tbody>
      </Table>
         </div>
     )
}
export default FeesSubmitted