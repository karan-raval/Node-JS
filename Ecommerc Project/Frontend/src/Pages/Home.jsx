import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <main>
        {/* <!-- slider Area Start--> */}
        <section className="slider-area ">
            <div className="slider-active">
                {/* <!-- Single Slider --> */}
                <div className="single-slider slider-bg1 slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="rowr">
                            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8  col-sm-10">
                                <div className="hero-caption text-center">
                                    <span>Fashion Sale</span>
                                    <h1 data-animation="bounceIn" data-delay="0.2s">Minimal Menz Style</h1>
                                    <p data-animation="fadeInUp" data-delay="0.4s">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    <a href="#" className="btn_1 hero-btn" data-animation="fadeInUp" data-delay="0.7s">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
                {/* <!-- Single Slider --> */}
                <div className="single-slider slider-bg2 slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10">
                                <div className="hero-caption text-center">
                                    <span>Fashion Sale</span>
                                    <h1 data-animation="bounceIn" data-delay="0.2s">Minimal Menz Style</h1>
                                    <p data-animation="fadeInUp" data-delay="0.4s">Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    <a href="#" className="btn_1 hero-btn" data-animation="fadeInUp" data-delay="0.7s">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
        {/* <!-- slider Area End--> */}
        {/* <!-- items Product 1  Start--> */}
        <section className="items-product1 pt-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-items mb-20">
                            <div className="items-img">
                                <img src="assets/img/gallery/items1.jpg"   alt=""/>
                            </div>
                            <div className="items-details">
                                <h4><a href="pro-details.html">Men's Fashion</a></h4>
                                <a href="pro-details.html" className="browse-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-items mb-20">
                            <div className="items-img">
                                <img src="assets/img/gallery/items2.jpg"   alt=""/>
                            </div>
                            <div className="items-details">
                                <h4><a href="pro-details.html">Women's Fashion</a></h4>
                                <a href="pro-details.html" className="browse-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-items mb-20">
                            <div className="items-img">
                                <img src="assets/img/gallery/items3.jpg"   alt=""/>
                            </div>
                            <div className="items-details">
                                <h4><a href="pro-details.html">Baby Fashion</a></h4>
                                <a href="pro-details.html" className="browse-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--items Product  End --> */}
        {/* <!-- Latest-items Start --> */}
        <div className="latest-items section-padding fix">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12">
                        <div className="nav-button">
                            {/* <!--Nav Button  --> */}
                            <nav>
                                <div className="nav-tittle">
                                    <h2>Trending This Week</h2>
                                </div>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-link active" id="nav-one-tab" data-bs-toggle="tab" href="#nav-one" role="tab" aria-controls="nav-one" aria-selected="true">Men</a>
                                    <a className="nav-link" id="nav-two-tab" data-bs-toggle="tab" href="#nav-two" role="tab" aria-controls="nav-two" aria-selected="false">Women</a>
                                    <a className="nav-link" id="nav-three-tab" data-bs-toggle="tab" href="#nav-three" role="tab" aria-controls="nav-three" aria-selected="false">Baby</a>
                                    <a className="nav-link" id="nav-four-tab" data-bs-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-four" aria-selected="false">Fashion</a>
                                </div>
                            </nav>
                            {/* <!--End Nav Button  --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* <!-- Nav Card --> */}
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                        {/* <!-- Tab 1 -->   */}
                        <div className="latest-items-active">
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest1.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest3.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">
                        {/* <!-- Tab 2 --> */}
                        <div className="latest-items-active">
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest1.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest3.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab">
                        {/* <!-- Tab 3 --> */}
                        <div className="latest-items-active">
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest1.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest3.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  {/* <!-- Single --> */} 
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
                        {/* <!-- Tab 4 --> */}
                        <div className="latest-items-active">
                             {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest1.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest3.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest2.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
                                                <span>$98.00 <span>$120.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- Single --> */}
                            <div className="properties pb-30">
                                <div className="properties-card">
                                    <div className="properties-img">
                                        <a href="pro-details.html"><img src="assets/img/gallery/latest4.jpg"   alt=""/></a>
                                        <div className="socal_icon">
                                            <a href="#"><i className="ti-shopping-cart"></i></a>
                                            <a href="#"><i className="ti-heart"></i></a>
                                            <a href="#"><i className="ti-zoom-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="properties-caption properties-caption2">
                                        <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                        <div className="properties-footer">
                                            <div className="price">
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
        {/* <!-- Latest-items End --> */}
        {/* <!-- Testimonial Start --> */}
        <div className="testimonial-area testimonial-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-10 col-md-11">
                        <div className="h1-testimonial-active">
                            {/* <!-- Single Testimonial --> */}
                            <div className="single-testimonial text-center">
                                <div className="testimonial-caption ">
                                    <div className="testimonial-top-cap">
                                        <h2>Customer Testimonial</h2>
                                        <p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    </div>
                                    {/* <!-- founder --> */}
                                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                        <div className="founder-img">
                                            <img src="assets/img/gallery/founder-img.png"   alt=""/>
                                        </div>
                                        <div className="founder-text">
                                            <span>Petey Cruiser</span>
                                            <p>Designer at Colorlib</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Testimonial --> */}
                            <div className="single-testimonial text-center">
                                <div className="testimonial-caption ">
                                    <div className="testimonial-top-cap">
                                        <h2>Customer Testimonial</h2>
                                        <p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    </div>
                                    {/* <!-- founder --> */}
                                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                        <div className="founder-img">
                                            <img src="assets/img/gallery/founder-img.png"   alt=""/>
                                        </div>
                                        <div className="founder-text">
                                            <span>Petey Cruiser</span>
                                            <p>Designer at Colorlib</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}
        {/* <!-- Latest-items 02 Start --> */}
        <section className="latest-items section-padding fix">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section-tittle text-center mb-40">
                        <h2>You May Like</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="latest-items-active">
                     {/* <!-- Single --> */}
                    <div className="properties pb-30">
                        <div className="properties-card">
                            <div className="properties-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/latest5.jpg"   alt=""/></a>
                                <div className="socal_icon">
                                    <a href="#"><i className="ti-shopping-cart"></i></a>
                                    <a href="#"><i className="ti-heart"></i></a>
                                    <a href="#"><i className="ti-zoom-in"></i></a>
                                </div>
                            </div>
                            <div className="properties-caption properties-caption2">
                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                <div className="properties-footer">
                                    <div className="price">
                                        <span>$98.00 <span>$120.00</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* <!-- Single --> */}
                    <div className="properties pb-30">
                        <div className="properties-card">
                            <div className="properties-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/latest6.jpg"   alt=""/></a>
                                <div className="socal_icon">
                                    <a href="#"><i className="ti-shopping-cart"></i></a>
                                    <a href="#"><i className="ti-heart"></i></a>
                                    <a href="#"><i className="ti-zoom-in"></i></a>
                                </div>
                            </div>
                            <div className="properties-caption properties-caption2">
                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                <div className="properties-footer">
                                    <div className="price">
                                        <span>$98.00 <span>$120.00</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* <!-- Single --> */}
                    <div className="properties pb-30">
                        <div className="properties-card">
                            <div className="properties-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/latest7.jpg"   alt=""/></a>
                                <div className="socal_icon">
                                    <a href="#"><i className="ti-shopping-cart"></i></a>
                                    <a href="#"><i className="ti-heart"></i></a>
                                    <a href="#"><i className="ti-zoom-in"></i></a>
                                </div>
                            </div>
                            <div className="properties-caption properties-caption2">
                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                <div className="properties-footer">
                                    <div className="price">
                                        <span>$98.00 <span>$120.00</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* <!-- Single --> */}
                    <div className="properties pb-30">
                        <div className="properties-card">
                            <div className="properties-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/latest8.jpg"   alt=""/></a>
                                <div className="socal_icon">
                                    <a href="#"><i className="ti-shopping-cart"></i></a>
                                    <a href="#"><i className="ti-heart"></i></a>
                                    <a href="#"><i className="ti-zoom-in"></i></a>
                                </div>
                            </div>
                            <div className="properties-caption properties-caption2">
                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                <div className="properties-footer">
                                    <div className="price">
                                        <span>$98.00 <span>$120.00</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* <!-- Single --> */}
                    <div className="properties pb-30">
                        <div className="properties-card">
                            <div className="properties-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/latest6.jpg"   alt=""/></a>
                                <div className="socal_icon">
                                    <a href="#"><i className="ti-shopping-cart"></i></a>
                                    <a href="#"><i className="ti-heart"></i></a>
                                    <a href="#"><i className="ti-zoom-in"></i></a>
                                </div>
                            </div>
                            <div className="properties-caption properties-caption2">
                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                <div className="properties-footer">
                                    <div className="price">
                                        <span>$98.00 <span>$120.00</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* <!-- Single --> */}
                    <div className="properties pb-30">
                        <div className="properties-card">
                            <div className="properties-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/latest7.jpg"   alt=""/></a>
                                <div className="socal_icon">
                                    <a href="#"><i className="ti-shopping-cart"></i></a>
                                    <a href="#"><i className="ti-heart"></i></a>
                                    <a href="#"><i className="ti-zoom-in"></i></a>
                                </div>
                            </div>
                            <div className="properties-caption properties-caption2">
                                <h3><a href="pro-details.html">Cashmere Tank + Bag</a></h3>
                                <div className="properties-footer">
                                    <div className="price">
                                        <span>$98.00 <span>$120.00</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Latest-items End --> */}
        {/* <!-- Home Blog Start --> */}
        <section className="home-blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="cl-xl-7 col-lg-8 col-md-10">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle text-center mb-40">
                            <h2>Latest News</h2>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-blogs mb-30">
                            <div className="blog-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/blog1.jpg"   alt=""/></a>
                            </div>
                            <div className="blogs-cap">
                                <span>Fashion Tips</span>
                                <h5><a href="pro-details.html">What Curling Irons Are The Best Ones</a></h5>
                                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                                <a href="pro-details.html" className="red-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-blogs mb-30">
                            <div className="blog-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/blog2.jpg"   alt=""/></a>
                            </div>
                            <div className="blogs-cap">
                                <span>Fashion Tips</span>
                                <h5><a href="pro-details.html">Vogue's Ultimate Guide To Autumn/
                                Winter 2019 Shoes</a></h5>
                                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                                <a href="pro-details.html" className="red-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-blogs mb-30">
                            <div className="blog-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/blog3.jpg"  alt=""/></a>
                            </div>
                            <div className="blogs-cap">
                                <span>Fashion Tips</span>
                                <h5><a href="pro-details.html">What Curling Irons Are The Best Ones</a></h5>
                                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                                <a href="pro-details.html" className="red-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Home Blog End --> */}
        {/* <!-- Services Area Start --> */}
        <div className="categories-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat mb-50 wow fadeInUp text-center" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="cat-icon">
                                <img src="assets/img/icon/services1.svg"  alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5>Fast & Free Delivery</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat mb-50 wow fadeInUp text-center" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="cat-icon">
                                <img src="assets/img/icon/services2.svg"  alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5>Secure Payment</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat mb-50 wow fadeInUp text-center" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="cat-icon">
                                <img src="assets/img/icon/services3.svg"  alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5>Money Back Guarantee</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat mb-50 wow fadeInUp text-center" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="cat-icon">
                                <img src="assets/img/icon/services4.svg"  alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5>Online Support</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Services Area End --> */}
    </main>
    <Footer/>
    </>
  )
}

export default Home