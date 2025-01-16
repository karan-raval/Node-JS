import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/navbar'

const AddCategory = () => {
  return (
    <>
      <div className="container-scroller">
        <Sidebar />
        <div className="container-fluid page-body-wrapper">
          <nav className="navbar p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
              <a className="navbar-brand brand-logo-mini" >
                <img src="https://demo.bootstrapdash.com/corona-free/jquery/template/assets/images/logo-mini.svg" alt="logo" />
              </a>
            </div>
            <Navbar />
          </nav>
          </div>
          </div>
    </>
  )
}

export default AddCategory