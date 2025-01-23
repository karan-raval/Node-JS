import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
     <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}
          <a class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-icon rotate-n-15">
              <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </a>

          {/* Divider */}
          <hr class="sidebar-divider my-0" />

          {/* Nav Item - Dashboard */}
          <li class="nav-item active">
            <Link to={'/admin'} class="nav-link">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Divider */}
          <hr class="sidebar-divider" />

          {/* Divider */}
          {/* <hr class="sidebar-divider" /> */}

          {/* Heading */}
          <div class="sidebar-heading">Addons</div>

          {/* Nav Item - Pages Collapse Menu */}
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i class="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div
              id="collapsePages"
              class="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Screens:</h6>
                <Link to={'/login'} class="collapse-item">Login</Link>
                <Link to={'/signup'} class="collapse-item">Register</Link>
                <Link to={'/forgotpassword'} class="collapse-item">Forgot Password</Link>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6> 
                <Link to={'/*'} class="collapse-item">404 Page</Link>
              </div>
            </div>
          </li>

          {/* Divider */}
          <hr class="sidebar-divider d-none d-md-block" />

          {/* Sidebar Toggler (Sidebar) */}
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
        {/* End of Sidebar */}
    </>
  );
};

export default Sidebar;
