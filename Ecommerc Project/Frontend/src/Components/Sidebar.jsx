import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
     <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </a>

          {/* Divider */}
          <hr className="sidebar-divider my-0" />

          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <Link to={'/admin'} className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Divider */}
          <hr className="sidebar-divider" />

          {/* Divider */}
          {/* <hr className="sidebar-divider" /> */}

          {/* Heading */}
          <div className="sidebar-heading">Addons</div>

          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div
              id="collapsePages"
              className="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Screens:</h6>
                <Link to={'/login'} className="collapse-item">Login</Link>
                <Link to={'/signup'} className="collapse-item">Register</Link>
                <Link to={'/forgotpassword'} className="collapse-item">Forgot Password</Link>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6> 
                <Link to={'/*'} className="collapse-item">404 Page</Link>
              </div>
            </div>
          </li>

          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />

          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
        {/* End of Sidebar */}
    </>
  );
};

export default Sidebar;
