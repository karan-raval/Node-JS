import React from 'react'
import logo from '../assets/image/logo.png'
const Header = () => {
  return (
    <>
     <header>
        <div className="header-area">
            <div className="header-top d-none d-sm-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="d-flex justify-content-between flex-wrap align-items-center">
                                <div className="header-info-left">
                                    <ul>                             
                                        <li><a  >About Us</a></li>
                                        <li><a  >Privacy</a></li>
                                        <li><a  >FAQ</a></li>
                                        <li><a  >Careers</a></li>
                                    </ul>
                                </div>
                                <div className="header-info-right d-flex">
                                    <ul className="order-list">
                                        <li><a  >My Wishlist</a></li>
                                        <li><a  >Track Your Order</a></li>
                                    </ul>
                                    <ul className="header-social">  
                                        <li><a  ><i className="fab fa-facebook"></i></a></li>
                                        <li> <a  ><i className="fab fa-instagram"></i></a></li>
                                        <li><a  ><i className="fab fa-twitter"></i></a></li>
                                        <li><a  ><i className="fab fa-linkedin-in"></i></a></li>
                                        <li> <a  ><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mid header-sticky">
                <div className="container">
                    <div className="menu-wrapper">
                        {/* <!-- Logo --> */}
                        <div className="logo">
                            <a href="index.html"><img src={logo} alt=""/></a>
                        </div>
                        {/* <!-- Main-menu --> */}
                        <div className="main-menu d-none d-lg-block">
                            <nav>                                                
                                <ul id="navigation">  
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="categories.html">Men</a></li>
                                    <li><a href="categories.html">Women</a></li>
                                    <li className="new"><a href="categories.html">Baby Collection</a></li>
                                    <li><a  >Pages  <i className="fas fa-angle-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="pro-details.html">Product Details</a></li>
                                            <li><a href="checkout.html">Product Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a>
                                        <ul className="submenu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="elements.html">Element</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        {/* <!-- Header Right --> */}
                        <div className="header-right">
                            <ul>
                                <li>
                                    <div className="nav-search search-switch hearer_icon">
                                        <a id="search_1" href="javascript:void(0)"> 
                                            <span className="flaticon-search"></span>
                                        </a>
                                    </div>
                                </li>
                                <li> <a href="login.html"><span className="flaticon-user"></span></a></li>
                                <li className="cart"><a href="cart.html"><span className="flaticon-shopping-cart"></span></a> </li>
                            </ul>
                        </div>

                    </div>
                    {/* <!-- Show Search Box --> */}
                    <div className="search_input" id="search_input_box">
                        <form className="search-inner d-flex justify-content-between ">
                            <input type="text" className="form-control" id="search_input" placeholder="Search Here"/>
                            <button type="submit" className="btn"></button>
                            <span className="ti-close" id="close_search" title="Close Search"></span>
                        </form>
                    </div>
                    {/* <!-- Mobile Menu --> */}
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
            <div className="header-bottom text-center">
                <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer  <a   className="browse-btn">Shop Now</a></p>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header