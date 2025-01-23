import React, { useEffect, useState } from "react";
import "jquery-nice-select";
import "jquery-nice-select/css/nice-select.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/css/login.css";

const MensPro = () => {
    const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown
    const [selectedCategory, setSelectedCategory] = useState(""); // Track selected value
    const [selectedType, setSelectedType] = useState("");

    // Close dropdown on outside click
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
    setOpenDropdown(null); // Close the dropdown after selection
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
                        {/* Left content */}
                        <div className="col-xl-3 col-lg-4 col-md-4">
                            {/* Job Category Listing start */}
                            <div className="category-listing mb-50">
                                {/* Single Listing */}
                                <div className="single-listing">
                                    {/* Select Categories */}
                                    <div className="select-Categories pb-30">
                                        {/* Dropdown for Category */}
                                        <div className="select-job-items2 mb-30">
                                        <div className="col-xl-12">
      {/* Hidden Select Element */}
      <select name="select2" value={selectedCategory} onChange={() => {}} style={{ display: "none" }}>
        <option value="">Category</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
        <option value="Category 4">Category 4</option>
      </select>

      {/* Custom Dropdown */}
      <div
        className={`nice-select ${openDropdown === "category" ? "open" : ""}`}
        onClick={() => toggleDropdown("category")}
        tabIndex="0"
      >
        <span className="current">{selectedCategory || "Category"}</span>
        <ul className="list">
          <li
            data-value=""
            className={`option ${selectedCategory === "" ? "selected" : ""}`}
            onClick={() => handleCategorySelect("")}
          >
            Category
          </li>
          <li
            data-value="Category 1"
            className={`option ${selectedCategory === "Category 1" ? "selected" : ""}`}
            onClick={() => handleCategorySelect("Category 1")}
          >
            Category 1
          </li>
          <li
            data-value="Category 2"
            className={`option ${selectedCategory === "Category 2" ? "selected" : ""}`}
            onClick={() => handleCategorySelect("Category 2")}
          >
            Category 2
          </li>
          <li
            data-value="Category 3"
            className={`option ${selectedCategory === "Category 3" ? "selected" : ""}`}
            onClick={() => handleCategorySelect("Category 3")}
          >
            Category 3
          </li>
          <li
            data-value="Category 4"
            className={`option ${selectedCategory === "Category 4" ? "selected" : ""}`}
            onClick={() => handleCategorySelect("Category 4")}
          >
            Category 4
          </li>
        </ul>
      </div>
    </div>
    </div>

                                        {/* Dropdown for Type */}
                                         <div className="select-job-items2 mb-30">
        <div className="col-xl-12">
          {/* Hidden Select */}
          <select name="select2" value={selectedType} onChange={() => {}} style={{ display: "none" }}>
            <option value="">Type</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="Type 3">Type 3</option>
            <option value="Type 4">Type 4</option>
          </select>

          {/* Custom Dropdown */}
          <div
            className={`nice-select ${openDropdown === "type" ? "open" : ""}`}
            onClick={() => toggleDropdown("type")}
            tabIndex="0"
          >
            <span className="current">{selectedType || "Type"}</span>
            <ul className="list">
              <li
                data-value=""
                className={`option ${selectedType === "" ? "selected" : ""}`}
                onClick={() => handleSelect("type", "")}
              >
                Type
              </li>
              <li
                data-value="Type 1"
                className={`option ${selectedType === "Type 1" ? "selected" : ""}`}
                onClick={() => handleSelect("type", "Type 1")}
              >
                Type 1
              </li>
              <li
                data-value="Type 2"
                className={`option ${selectedType === "Type 2" ? "selected" : ""}`}
                onClick={() => handleSelect("type", "Type 2")}
              >
                Type 2
              </li>
              <li
                data-value="Type 3"
                className={`option ${selectedType === "Type 3" ? "selected" : ""}`}
                onClick={() => handleSelect("type", "Type 3")}
              >
                Type 3
              </li>
              <li
                data-value="Type 4"
                className={`option ${selectedType === "Type 4" ? "selected" : ""}`}
                onClick={() => handleSelect("type", "Type 4")}
              >
                Type 4
              </li>
            </ul>
          </div>
        </div>
    </div>

                                        {/* Dropdown for Size */}
                                        <div className="select-job-items2 mb-30">
                                            <div className="col-xl-12">
                                                <select name="select2" style={{ display: 'none' }}>
                                                    <option value="">Size</option>
                                                    <option value="">XXL</option>
                                                    <option value="">XL</option>
                                                    <option value="">LG</option>
                                                    <option value="">M</option>
                                                    <option value="">sm</option>
                                                </select>
                                                <div
                                                    className={`nice-select ${openDropdown === "size" ? "open" : ""}`}
                                                    onClick={() => toggleDropdown("size")}
                                                    tabIndex="0"
                                                >
                                                    <span className="current">Size</span>
                                                    <ul className="list">
                                                        <li data-value="" className="option selected">Size</li>
                                                        <li data-value="" className="option">XXL</li>
                                                        <li data-value="" className="option">XL</li>
                                                        <li data-value="" className="option">LG</li>
                                                        <li data-value="" className="option">M</li>
                                                        <li data-value="" className="option">sm</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dropdown for Color */}
                                        <div className="select-job-items2 mb-30">
                                            <div className="col-xl-12">
                                                <select name="select2" style={{ display: 'none' }}>
                                                    <option value="">Color</option>
                                                    <option value="">Red</option>
                                                    <option value="">Green</option>
                                                    <option value="">Blue</option>
                                                    <option value="">Skyblue</option>
                                                </select>
                                                <div
                                                    className={`nice-select ${openDropdown === "color" ? "open" : ""}`}
                                                    onClick={() => toggleDropdown("color")}
                                                    tabIndex="0"
                                                >
                                                    <span className="current">Color</span>
                                                    <ul className="list">
                                                        <li data-value="" className="option selected">Color</li>
                                                        <li data-value="" className="option">Red</li>
                                                        <li data-value="" className="option">Green</li>
                                                        <li data-value="" className="option">Blue</li>
                                                        <li data-value="" className="option">Skyblue</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Select Categories End */}
                                    {/* Range Slider Start */}
                                    <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow mb-40">
                                        <div className="small-tittle">
                                            <h4>Filter by Price</h4>
                                        </div>
                                        <div className="widgets_inner">
                                            <div className="range_item">
                                                <span className="irs js-irs-0">
                                                    <span className="irs">
                                                        <span className="irs-line" tabIndex="-1">
                                                            <span className="irs-line-left"></span>
                                                            <span className="irs-line-mid"></span>
                                                            <span className="irs-line-right"></span>
                                                        </span>
                                                        <span className="irs-min" style={{ visibility: "hidden" }}>$ 0</span>
                                                        <span className="irs-max" style={{ visibility: "visible" }}>$ 1,000</span>
                                                        <span className="irs-from" style={{ visibility: "visible", left: 0 }}>$ 0</span>
                                                        <span className="irs-to" style={{ visibility: "visible", left: 45.1724 }}>$ 500</span>
                                                        <span className="irs-single" style={{ visibility: "hidden", left: "18.3333" }}>$ 0 - $ 500</span>
                                                    </span>
                                                    <span className="irs-grid"></span>
                                                    <span className="irs-bar" style={{ left: 1.72414, width: "48.2759px" }}></span>
                                                    <span className="irs-shadow shadow-from" style={{ display: 'none' }}></span>
                                                    <span className="irs-shadow shadow-to" style={{ display: 'none' }}></span>
                                                    <span className="irs-slider from" style={{ left: 0 }}></span>
                                                    <span className="irs-slider to type_last" style={{ left: 48.2759 }}></span>
                                                </span>
                                                <input type="text" className="js-range-slider irs-hidden-input" value="" readOnly />
                                                <div className="d-flex align-items-center">
                                                    <div className="price_value d-flex justify-content-center">
                                                        <input type="text" className="js-input-from" id="amount" readOnly />
                                                        <span>to</span>
                                                        <input type="text" className="js-input-to" id="amount" readOnly />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                    {/* Range end */}
                                    {/* Select Categories */}
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
                                            <input type="checkbox" checked="checked" />
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
                                    {/* Select Categories End */}
                                    {/* Select Categories start */}
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
                                    {/* Select Categories End */}
                                </div>
                            </div>
                            {/* Job Category Listing End */}
                        </div>
                        {/* Right content */}
                        <div className="col-xl-9 col-lg-8 col-md-8">
                            <div className="latest-items latest-items2">
                                <div className="row">
                                    {/* Product Cards */}
                                    {/* Repeat this block for each product */}
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="properties pb-30">
                                            <div className="properties-card">
                                                <div className="properties-img">
                                                    <a href="pro-details.html">
                                                        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest8.jpg.webp" alt="" />
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
                                    {/* Repeat for other products */}
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
