import React, { useEffect } from "react";
import logo from "../assets/image/logo.png";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

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
                        <li>
                          <a>About Us</a>
                        </li>
                        <li>
                          <a>Privacy</a>
                        </li>
                        <li>
                          <a>FAQ</a>
                        </li>
                        <li>
                          <a>Careers</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header-info-right d-flex">
                      <ul className="order-list">
                        <li>
                          <a>My Wishlist</a>
                        </li>
                        <li>
                          <a>Track Your Order</a>
                        </li>
                      </ul>
                      <ul className="header-social">
                        <li>
                          <a>
                            <i className="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a>
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a>
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
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
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
                {/* <!-- Main-menu --> */}
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to={'/'}>Home</Link>
                      </li>
                      <li>
                        <a href="categories.html">Men</a>
                      </li>
                      <li>
                        <a href="categories.html">Women</a>
                      </li>
                      <li className="new">
                        <a href="categories.html">Baby Collection</a>
                      </li>
                        <li>
                        <Link to={'/contact-us'}>Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right">
                  <ul>
                    <li>
                      <Link to={'/login'}>
                      <i className="bi bi-person icon"></i>
                      </Link>
                    </li>
                    <li className="cart">
                      <Link to={'/cart'}>
                      <i className="bi bi-bag icon"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none">
                  <div className="slicknav_menu">
                    <a
                      aria-haspopup="true"
                      role="button"
                      className="slicknav_btn slicknav_open"
                      style={{outline: "none"}}
                    >
                      <span className="slicknav_menutxt">MENU</span>
                      <span className="slicknav_icon">
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                      </span>
                    </a>
                    <ul
                      className="slicknav_nav"
                      aria-hidden="false"
                      role="menu"
                      style={{display: "block"}}
                    >
                      <li>
                        <a href="index.html" role="menuitem" tabIndex="0">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="categories.html" role="menuitem" tabIndex="0">
                          Men
                        </a>
                      </li>
                      <li>
                        <a href="categories.html" role="menuitem" tabIndex="0">
                          Women
                        </a>
                      </li>
                      <li className="new">
                        <a href="categories.html" role="menuitem" tabIndex="0">
                          Baby Collection
                        </a>
                      </li>
                      <li className="slicknav_collapsed slicknav_parent">
                        <a
                          
                          role="menuitem"
                          aria-haspopup="true"
                          tabIndex="0"
                          className="slicknav_item slicknav_row"
                          style={{outline: "none"}}
                        >
                          <a  tabIndex="0">
                            Pages <i className="fas fa-angle-down"></i>
                          </a>
                          <span className="slicknav_arrow">+</span>
                        </a>
                        <ul
                          className="submenu slicknav_hidden"
                          role="menu"
                          aria-hidden="true"
                          style={{display: "none"}}
                        >
                          <li>
                            <a href="login.html" role="menuitem" tabIndex="0">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="cart.html" role="menuitem" tabIndex="0">
                              Cart
                            </a>
                          </li>
                          <li>
                            <a
                              href="pro-details.html"
                              role="menuitem"
                              tabIndex="0"
                            >
                              Product Details
                            </a>
                          </li>
                          <li>
                            <a
                              href="checkout.html"
                              role="menuitem"
                              tabIndex="0"
                            >
                              Product Checkout
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slicknav_collapsed slicknav_parent">
                        <a
                          
                          role="menuitem"
                          aria-haspopup="true"
                          tabIndex="0"
                          className="slicknav_item slicknav_row"
                          style={{outline: "none"}}
                        >
                          <a href="blog.html" tabIndex="0">
                            Blog
                          </a>
                          <span className="slicknav_arrow">+</span>
                        </a>
                        <ul
                          className="submenu slicknav_hidden"
                          role="menu"
                          aria-hidden="true"
                          style={{display: "none"}}
                        >
                          <li>
                            <a href="blog.html" role="menuitem" tabIndex="0">
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href="elements.html"
                              role="menuitem"
                              tabIndex="0"
                            >
                              Element
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-details.html"
                              role="menuitem"
                              tabIndex="0"
                            >
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html" role="menuitem" tabIndex="0">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom text-center">
            <p>
              Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer{" "}
              <a className="browse-btn">Shop Now</a>
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
