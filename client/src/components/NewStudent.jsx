import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {message} from "antd"

const NewStudent = () => {

         const [input , setInput] = useState({});
         const [installment , setInstallment] = useState(0)


         const navigate = useNavigate();
  
           const handleInput = (e) => {
                   let name = e.target.name;
                   let value = e.target.value;
                   setInput((prev) => ({ ...prev, [name]: value }));
           }
          
           const handleSubmit = async (e) => {
              e.preventDefault();
              const API = "http://localhost:8000/student/stuSave";
             axios.post(API , {...input , "firstInstallment": installment , "secondInstallment" : installment , "thirdInstallment":installment , "fourthInstallment":installment , "firstPaid":false , "secondPaid":false , "thirdPaid":false , "fourthPaid" :false}).then((res)=> {
               const key = Object.keys(res.data).length;
              key===15 ?  message.success("Student Added Successfully") : message.error("Enrollment Or Email Already Exist")
            })
              navigate("/enquiry")
           }

         
        const checkInstallment = (classs , e) => {
              handleInput(e);
              switch (classs) {
                  case "First" : return 15000/4;
                  case "Second" : return 20000/4;
                  case "Third" : return 25000/4;
                  case "Forth" : return 30000/4;
                  case "Fifth" : return 35000/4;
                  case "Sixth" : return  40000/4;
                  case "Seventh" : return  45000/4;
                  case "Eightth" : return 50000/4;
                  case "Nineth" : return 55000/4;
                  case "Tenth" : return 60000/4;
                  case "Eleventh" : return 65000/4;
                  case "Twelth" : return 70000/4;
              }
        }






     return (
         <> 
            <div style={{ height:"80vh" , width:"100vw" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                     <div style={{border:"2px solid grey" , padding:"40px 80px" , borderRadius:"10px" , backgroundColor:"lightblue"}}>
                     <Form style={{width:"50vw"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email" name='Email' value={input.Email} onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='Name' value={input.Name} onChange={handleInput} />
      </Form.Group>
 <div style={{margin:"15px 0px" , display:"flex" , gap:"75px"}}>
   <div>     
      <label htmlFor="class" style={{margin:"5px 0px"}}  >Choose Your Class  :</label>
          <select value={input.Class} name="Class" id='class' style={{fontSize:"14px" , border:"none" , margin:"5px 0px" }}  onChange={handleInput}>
              <option value="First">I</option>
              <option value="Second">II</option>
              <option value="Third">III</option>
              <option value="Forth">IV</option>
              <option value="Fifth">V</option>
              <option value="Sixth">VI</option>
              <option value="Seventh">VII</option>
              <option value="Eightth">VIII</option>
              <option value="Nineth">IX</option>
              <option value="Tenth" >X</option>
              <option value="Eleventh">XI</option>
              <option value="Twelth">XII</option>
          </select>
          </div>
      
      <div>
       <label htmlFor="section" style={{margin:"5px 0px"}}>Choose Your Section</label>  
        <select name="Section" id="section" style={{fontSize:"14px" , border:"none" , margin:"5px 0px"}} value={input.Section} onChange={handleInput}>
            <option value="A">A</option>    
            <option value="B">B</option>    
            <option value="C">C</option>    
            <option value="D">D</option>    
        </select>
        </div> 
    </div>      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enrollment Number </Form.Label>
        <Form.Control type="text" placeholder="Enrollment Number" name='Enrollment_Number' value={input.Enrollment_Number} onChange={(e)=> {setInstallment(checkInstallment(input.Class , e))}}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
                     </div>
            </div>
         </>
     )
}
export default NewStudent;
