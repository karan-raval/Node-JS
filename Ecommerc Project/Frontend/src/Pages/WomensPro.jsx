import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const WomensPro = ()=>{
    return(
        <>
        <Header/>
        <div class="hero-area section-bg2">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="slider-area">
                            <div class="slider-height2 slider-bg4 d-flex align-items-center justify-content-center">
                                <div class="hero-caption hero-caption2">
                                    <h2>Category</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb justify-content-center">
                                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">Category</a></li> 
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
        {/*listing Area Start */}
        <div class="listing-area pt-50 pb-50">
            <div class="container">
                <div class="row">
                     {/* Left content */}
                    <div class="col-xl-3 col-lg-4 col-md-4">
                        {/*Job Category Listing start */}
                        <div class="category-listing mb-50">
                            {/*single one */}
                            <div class="single-listing">
                                {/*select-Categories  */}
                                <div class="select-Categories pb-30">
                                    <div class="select-job-items2 mb-30">
                                        <div class="col-xl-12">
                                            <select name="select2">
                                                <option value="">Category</option>
                                                <option value="">Category 1</option>
                                                <option value="">Category 2</option>
                                                <option value="">Category 3</option>
                                                <option value="">Category 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="select-job-items2 mb-30">
                                        <div class="col-xl-12">
                                            <select name="select2">
                                                <option value="">Type</option>
                                                <option value="">Type 1</option>
                                                <option value="">Type 2</option>
                                                <option value="">Type 3</option>
                                                <option value="">Type 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="select-job-items2 mb-30">
                                        <div class="col-xl-12">
                                            <select name="select2">
                                                <option value="">Size</option>
                                                <option value="">XXL</option>
                                                <option value="">XL</option>
                                                <option value="">LG</option>
                                                <option value="">M</option>
                                                <option value="">sm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="select-job-items2 mb-30">
                                        <div class="col-xl-12">
                                            <select name="select2">
                                                <option value="">Color</option>
                                                <option value="">Read</option>
                                                <option value="">Green</option>
                                                <option value="">Blue</option>
                                                <option value="">skyblue</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/*select-Categories End */}
                                {/*Range Slider Start */}
                                <aside class="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow mb-40">
                                    <div class="small-tittle">
                                        <h4>Filter by Price</h4>
                                    </div>
                                    <div class="widgets_inner">
                                        <div class="range_item">
                                            <input type="text" class="js-range-slider" value="" />
                                            <div class="d-flex align-items-center">

                                                <div class="price_value d-flex justify-content-center">
                                                    <input type="text" class="js-input-from" id="amount" readonly />
                                                    <span>to</span>
                                                    <input type="text" class="js-input-to" id="amount" readonly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                                {/*range end */}
                                {/*select-Categories  */}
                                <div class="select-Categories pb-30">
                                    <div class="small-tittle mb-20">
                                        <h4>Filter by Genres</h4>
                                    </div>
                                    <label class="container">History
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Horror - Thriller
                                        <input type="checkbox" checked="checked active"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Love Stories
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Science Fiction
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Biography
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                {/*select-Categories End */}
                                {/*select-Categories start */}
                                <div class="select-Categories pb-20">
                                    <div class="small-tittle mb-20">
                                        <h4>Filter by Brand</h4>
                                    </div>
                                    <label class="container">Green Publications
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Anondo Publications
                                        <input type="checkbox" checked="checked active"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Rinku Publications
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Sheba Publications
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Red Publications
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                {/*select-Categories End */}
                            </div>
                        </div>
                        {/*Job Category Listing End */}
                    </div>
                     {/*?  Right content */}
                    <div class="col-xl-9 col-lg-8 col-md-8">
                        <div class="latest-items latest-items2">
                            <div class="row">
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest5.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest6.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest7.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest8.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest6.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest1.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest3.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="properties pb-30">
                                        <div class="properties-card">
                                            <div class="properties-img">
                                                <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"  alt=""/></a>
                                                <div class="socal_icon">
                                                    <a href="#"><i class="ti-shopping-cart"></i></a>
                                                    <a href="#"><i class="ti-heart"></i></a>
                                                    <a href="#"><i class="ti-zoom-in"></i></a>
                                                </div>
                                            </div>
                                            <div class="properties-caption properties-caption2">
                                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                                <div class="properties-footer">
                                                    <div class="price">
                                                        <span>$98.00 <span>$120.00</span></span>
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
<Footer/>

        </>
    )
}

export default WomensPro