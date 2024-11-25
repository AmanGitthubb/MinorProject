import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Layout";
import NewStudent from "./components/NewStudent";
import FeesSubmitted from "./components/FeesSubmit";
import SubmitFees from "./components/SubmitFees";
import Enquiry from "./components/Enquiry";
import DeleteData from "./components/DeleteData";
import Search from "./components/Search";
import Edit from "./components/Edit";
const App = () => {
     return (
         <>
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>} >
                      <Route index element={<NewStudent/>}  />
                      <Route path="insertstu" element={<NewStudent/>}  />
                      <Route path="feessubmit" element={<FeesSubmitted/>} /> 
                      <Route path="submitfees" element={<SubmitFees/>} /> 
                      <Route path="enquiry" element={<Enquiry/>} />
                      <Route path="deletedata" element={<DeleteData/> }/>
                      <Route path="searchdata" element={<Search/> }/>
                      <Route path="editdata" element={<Edit/> }/>
                    </Route>
                </Routes>
              </BrowserRouter>
         </>
     )
}
export default App;