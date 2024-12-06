import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="s-pageheader">
        <header className="header">
          <div className="header__content row">
            <div className="header__logo">
              <a className="logo" href="index.html">
                <img src={logo} alt="Homepage" />
              </a>
            </div>

            <ul className="header__social">
              <li>
                <a>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
            </ul>

            <a className="header__search-trigger"></a>

            <div className="header__search">
              <form
                role="search"
                method="get"
                className="header__search-form"
                action="#"
              >
                <label>
                  <span className="hide-content">Search for:</span>
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Type Keywords"
                    value=""
                    name="s"
                    title="Search for:"
                    autoComplete="off"
                  />
                </label>
                <input type="submit" className="search-submit" value="Search" />
              </form>

              <a title="Close Search" className="header__overlay-close">
                Close
              </a>
            </div>

            <a className="header__toggle-menu" title="Menu">
              <span>Menu</span>
            </a>

            <nav className="header__nav-wrap">
              <h2 className="header__nav-heading h6">Site Navigation</h2>

              <ul className="header__nav">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="has-children">
                  <a>Categories</a>
                  <ul className="sub-menu">
                    <li>
                      <a>Lifestyle</a>
                    </li>
                    <li>
                      <a>Health</a>
                    </li>
                    <li>
                      <a>Family</a>
                    </li>
                    <li>
                      <a>Management</a>
                    </li>
                    <li>
                      <a>Travel</a>
                    </li>
                    <li>
                      <a>Work</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children current">
                  <a>Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a>Video Post</a>
                    </li>
                    <li>
                      <a>Audio Post</a>
                    </li>
                    <li>
                      <a>Gallery Post</a>
                    </li>
                    <Link to={'/createblog'}><li>
                    <a>Standard Post</a>
                    </li></Link>
                  </ul>
                </li>
                <Link to={"/login"}><li>
                  <a>
                    Login
                  </a>
                </li></Link>
                <li>
                  <Link to={"/aboutus"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>

              <a
                title="Close Menu"
                className="header__overlay-close close-mobile-menu"
              >
                Close
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
