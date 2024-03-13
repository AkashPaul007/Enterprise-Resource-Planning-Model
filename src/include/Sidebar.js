import { NavLink } from "react-router-dom";
function Sidebar(){
    return(
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">ERP <sup>1</sup></div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            Admin Panel
          </div><br></br>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog" />
              <span>Admin Options</span>
            </a> */}
            <hr className="sidebar-divider" />
            <NavLink className="nav-link collapsed" to="/"><i className="fa fa-dashboard"/><span>Dashboard</span></NavLink>
            <hr className="sidebar-divider" />
            <NavLink className="nav-link collapsed" to="/product"><i className="fa fa-dashboard"/><span>Products Management</span></NavLink>
            <hr className="sidebar-divider" />
            <NavLink className="nav-link collapsed" to="/order"><i className="fa fa-dashboard"/><span>Order Management</span></NavLink>
            <hr className="sidebar-divider" />
          </li>

        </ul>
        </>
    )
    }
    export default Sidebar;