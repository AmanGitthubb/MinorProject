import { useState } from "react"
import { Button } from "react-bootstrap";
import axios from "axios";
import { Form } from "react-bootstrap";
import  {message} from "antd"

const Edit = () => {

      const [Enrollement , setenrollment_Number] = useState("");
      const [mydata , setMydata] = useState({});
      const [showEnrollmentPage , setShowEnrollmentPage] = useState(true);
      const [showEditPage , setShowEditPage] = useState(false)

      const handleSubmit = (e) => {
        e.preventDefault();
        const API = `http://localhost:8000/student/stuSearch`;
        axios.post(API , {Enrollment_Number:Enrollement}).then((res)=> {
            if (res.data) {
             setMydata(res.data);
             setShowEnrollmentPage(false);
             setShowEditPage(true)
            }
            else {
             message.error("Enrollment is Incorrect")
            }
        })
   }
    const showpage = (permission) => {
            if (!permission) {
                 return "none"
            }
            return "flex"
    }
     

    const handleInput = (e) => {
          let name = e.target.name;
          let value = e.target.value;
          setMydata({...mydata , [name]:value})
          console.log(mydata)
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        const API = `http://localhost:8000/student/stuFeesSave`
        axios.post(API , mydata).then(()=>{
            message.success("SuccessFully Updated")
        })
    }



     return (
         <>
     <div style={{display:showpage(showEnrollmentPage)}}>
        <div>
            <h1 style={{textAlign:"center"}}>Edit Page</h1>
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
             </div>
    </div>
             <div style={{ height:"80vh" , width:"100vw" , display:showpage(showEditPage) , justifyContent:"center" , alignItems:"center"}}>
                     <div style={{border:"2px solid grey" , padding:"40px 80px" , borderRadius:"10px" , backgroundColor:"lightblue"}}>
                     <Form style={{width:"50vw"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email" name='Email' value={mydata.Email} onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='Name' value={mydata.Name} onChange={handleInput}  />
      </Form.Group>
 <div style={{margin:"15px 0px" , display:"flex" , gap:"75px"}}>
   <div>     
      <label htmlFor="class" style={{margin:"5px 0px"}}  >Choose Your Class  :</label>
          <select  value={mydata.Class} onChange={handleInput}  name="Class" id='class' style={{fontSize:"14px" , border:"none" , margin:"5px 0px" }}>
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
        <select value={mydata.Section} onChange={handleInput} name="Section" id="section" style={{fontSize:"14px" , border:"none" , margin:"5px 0px"}}>
            <option value="A">A</option>    
            <option value="B">B</option>    
            <option value="C">C</option>    
            <option value="D">D</option>    
        </select>
        </div> 
    </div>      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enrollment Number </Form.Label>
        <Form.Control type="text" placeholder="Enrollment Number" name='Enrollment_Number' value={mydata.Enrollment_Number} onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit2}>
        Submit
      </Button>
    </Form>
                     </div>
            </div>
         </>
     )
}
export default Edit;