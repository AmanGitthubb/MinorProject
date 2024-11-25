import Table from 'react-bootstrap/Table';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { RiDeleteBin5Fill } from "react-icons/ri";
import  {message }  from "antd"


const DeleteData = () => {

   const [mydata , setMydata] = useState([])

   const loadData = () => {
       const API = "http://localhost:8000/student/stuDisplay";
       axios.get(API).then((res)=> {
           setMydata(res.data)
           console.log(mydata)
       })
   }

   const Status = (res) => {
        if (res) {
            return (
                 <>
                    <text style={{color:"green" , fontWeight:"600"}}> Paid </text> 
                 </>
            )
        }
        else {
             return (
                 <>
                  <text style={{color:"red"}}> Not Paid </text>
                 </>
             )
        }
   }
  
    const deleteID = async (id) => {
         const API = `http://localhost:8000/student/stuDelete`;
          await  axios.post(API , {"id":id})
          message.success("Data Successfully Deleted")
          loadData()
    }

   useEffect(()=> {
       loadData();
   } , [])


     return (
         <div style={{padding:"20px"}}>
         <Table striped bordered hover size="sm">
      <thead>
             <th> Name</th>
             <th>Email</th>
             <th> Enrollment no.</th>
             <th>Class</th>
             <th>Section</th>
             <th>Fees Status</th>
             <th>Delete</th>
      </thead>
      <tbody>
            {mydata.map((key)=> {
                  return (
                     <>
                       <tr>
                          <td>{key.Name}</td>
                          <td>{key.Email}</td>
                          <td>{key.Enrollment_Number}</td>
                          <td>{key.Class}</td>
                          <td>{key.Section}</td>
                          <td>{Status(key.forthPaid)}</td>
                          <td onClick={()=> {deleteID(key._id)}}><RiDeleteBin5Fill/></td>
            </tr>
                     </>
                  )
            })}
      </tbody>
      </Table>
             
         </div>
     )
}
export default DeleteData;