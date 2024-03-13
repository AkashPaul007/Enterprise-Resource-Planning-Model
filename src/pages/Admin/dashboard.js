import Footer from "../../include/Footer";
import Sidebar from "../../include/Sidebar";
import Topbar from "../../include/Topbar";
import { NavLink } from "react-router-dom";
import "../../../src/App.css";
function dashboard(){
return(
<>
<div>
  <div id="wrapper">
  
   <Sidebar/>
   
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
    <Topbar/>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h2 className="h3 mb-0 text-gray-800">Dashboard</h2>
            <NavLink className=" d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" to="/"><i className="fa fa-dashboard"/><span>Dashboard</span></NavLink>
          </div>
{/*Total number of Products*/}
<div class="container-fluid">
  <div class="row">
      <div class="col-sm-6 box">
        <h2>Total Number of Products:<span>&nbsp; 50k</span></h2>
      </div>
      <div class="col-sm-6 box">
        <h2>Total Number of Orders:<span>&nbsp; 25k</span></h2>
      </div>
  </div>
 

           <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h3>Others</h3>
            <NavLink className=" d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" to="/product"><i className="fa fa-dashboard"/><span>Products Management</span></NavLink>&nbsp;&nbsp;
            <NavLink className=" d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" to="/order"><i className="fa fa-dashboard"/><span>Order Management</span></NavLink>
           </div>
           </div> 
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
<Footer/>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a> */}
  {/* Logout Modal*/}
  <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a className="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
</div>


</>
)
}
export default dashboard;