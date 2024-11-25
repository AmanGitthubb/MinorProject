import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , Outlet } from 'react-router-dom';


const Layout = () => {
     return (
         <>
    
        <div>
             <h1 style={{textAlign:"center" , backgroundColor:"pink" , padding:"10px" , margin:"0px"}}> Fees Management System </h1>
        </div>


            <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="feessubmit"> Fees Status </Nav.Link>
            <Nav.Link as={Link} to="submitfees">Submit fees</Nav.Link>
            <Nav.Link as={Link} to="insertstu">New Student</Nav.Link>
            <Nav.Link as={Link} to="deletedata">Delete Data</Nav.Link>
            <Nav.Link as={Link} to="searchdata">Search Data</Nav.Link>
            <Nav.Link as={Link} to="editdata">Edit Data</Nav.Link>
            <Nav.Link as={Link} to="enquiry">Fees enquiry</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet/>
         </>
     )
}
export default Layout;