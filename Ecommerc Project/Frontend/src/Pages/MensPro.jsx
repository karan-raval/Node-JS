import React, { useEffect, useState } from "react";
import "jquery-nice-select";
import "jquery-nice-select/css/nice-select.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/css/login.css";

const MensPro = () => {
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nice-select")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const handleSelect = (dropdownId, value) => {
    if (dropdownId === "category") {
      setSelectedCategory(value);
    } else if (dropdownId === "type") {
      setSelectedType(value);
    }
    setOpenDropdown(null);
  };

  return (
    <>
      <Header />
      <div className="hero-area section-bg2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="slider-area">
                <div className="slider-height2 slider-bg4 d-flex align-items-center justify-content-center">
                  <div className="hero-caption hero-caption2">
                    <h2>Category</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a>Category</a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero area End */}
      {/* Listing Area Start */}
      <div className="listing-area pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="category-listing mb-50">
                <div className="single-listing">
                  <div className="select-Categories pb-30">
                    <div className="select-job-items2 mb-30">
                      <div className="col-xl-12">
                        <select
                          name="select2"
                          value={selectedType}
                          onChange={() => {}}
                          style={{ display: "none" }}
                        >
                          <option value="">Type</option>
                          <option value="Type 1">Type 1</option>
                          <option value="Type 2">Type 2</option>
                          <option value="Type 3">Type 3</option>
                          <option value="Type 4">Type 4</option>
                        </select>

                        <div
                          className={`nice-select ${
                            openDropdown === "type" ? "open" : ""
                          }`}
                          onClick={() => toggleDropdown("type")}
                          tabIndex="0"
                        >
                          <span className="current">
                            {selectedType || "Type"}
                          </span>
                          <ul className="list">
                            <li
                              data-value=""
                              className={`option ${
                                selectedType === "" ? "selected" : ""
                              }`}
                              onClick={() => handleSelect("type", "")}
                            >
                              Type
                            </li>
                            <li
                              data-value="Type 1"
                              className={`option ${
                                selectedType === "Type 1" ? "selected" : ""
                              }`}
                              onClick={() => handleSelect("type", "Type 1")}
                            >
                              Type 1
                            </li>
                            <li
                              data-value="Type 2"
                              className={`option ${
                                selectedType === "Type 2" ? "selected" : ""
                              }`}
                              onClick={() => handleSelect("type", "Type 2")}
                            >
                              Type 2
                            </li>
                            <li
                              data-value="Type 3"
                              className={`option ${
                                selectedType === "Type 3" ? "selected" : ""
                              }`}
                              onClick={() => handleSelect("type", "Type 3")}
                            >
                              Type 3
                            </li>
                            <li
                              data-value="Type 4"
                              className={`option ${
                                selectedType === "Type 4" ? "selected" : ""
                              }`}
                              onClick={() => handleSelect("type", "Type 4")}
                            >
                              Type 4
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="select-Categories pb-30">
                    <div className="small-tittle mb-20">
                      <h4>Filter by Genres</h4>
                    </div>
                    <label className="container">
                      History
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Horror - Thriller
                      <input type="checkbox"  />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Love Stories
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Science Fiction
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Biography
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="select-Categories pb-20">
                    <div className="small-tittle mb-20">
                      <h4>Filter by Brand</h4>
                    </div>
                    <label className="container">
                      Green Publications
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Anondo Publications
                      <input type="checkbox" checked="checked" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Rinku Publications
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Sheba Publications
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Red Publications
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8">
              <div className="latest-items latest-items2">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="properties pb-30">
                      <div className="properties-card">
                        <div className="properties-img">
                          <a href="pro-details.html">
                            <img
                              src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest8.jpg.webp"
                              alt=""
                            />
                          </a>
                          <div className="socal_icon">
                            <a>
                              <i className="ti-shopping-cart"></i>
                            </a>
                            <a>
                              <i className="ti-heart"></i>
                            </a>
                            <a>
                              <i className="ti-zoom-in"></i>
                            </a>
                          </div>
                        </div>
                        <div className="properties-caption properties-caption2">
                          <h3>
                            <a href="pro-details.html">Cashmere Tank + Bag</a>
                          </h3>
                          <div className="properties-footer">
                            <div className="price">
                              <span>
                                $98.00 <span>$120.00</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MensPro;
