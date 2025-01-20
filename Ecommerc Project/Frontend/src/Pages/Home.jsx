import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";


const Home = () => {
  useEffect(() => {
    $(".slider-active").slick({
      dots: true, 
      infinite: true, 
      speed: 500, 
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: false, 
      autoplaySpeed: 3000, 
    });
  }, []); 

  return (
    <>
      <Header />
      <main>
        <section className="slider-area ">
          <div className="slider-active">
            <div className="single-slider slider-bg1 slider-height d-flex align-items-center">
              <div className="container">
                <div className="rowr">
                  <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8  col-sm-10">
                    <div className="hero-caption text-center">
                      <span>Fashion Sale</span>
                      <h1 data-animation="bounceIn" data-delay="0.2s">
                        Minimal Menz Style
                      </h1>
                      <p data-animation="fadeInUp" data-delay="0.4s">
                        Consectetur adipisicing elit. Laborum fuga incidunt
                        laboriosam voluptas iure, delectus dignissimos facilis
                        neque nulla earum.
                      </p>
                      <a
                         
                        className="btn_1 hero-btn"
                        data-animation="fadeInUp"
                        data-delay="0.7s"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Single Slider --> */}
            <div class="slick-list draggable">
              <div class="slick-track" style={{ opacity: 1, width: "2048px" }}>
                <div
                  class="single-slider slider-bg1 slider-height d-flex align-items-center slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{
                    width: "1024px",
                    position: "relative",
                    left: "0px",
                    top: "0px",
                    zIndex: 998,
                    opacity: 0,
                    transition: "opacity 500ms",
                  }}
                >
                  {/* <div class="container"> */}
                    <div class="rowr">
                      <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-8  col-sm-10">
                        <div class="hero-caption text-center">
                          <span>Fashion Sale</span>
                          <h1
                            data-animation="bounceIn"
                            data-delay="0.2s"
                            class=""
                            style={{ animationDelay: "0.2s" }}
                          >
                            Minimal Menz Style
                          </h1>
                          <p
                            data-animation="fadeInUp"
                            data-delay="0.4s"
                            class=""
                            style={{ animationDelay: "0.4s" }}
                          >
                            Consectetur adipisicing elit. Laborum fuga incidunt
                            laboriosam voluptas iure, delectus dignissimos
                            facilis neque nulla earum.
                          </p>
                          <a
                             
                            class="btn_1 hero-btn"
                            data-animation="fadeInUp"
                            data-delay="0.7s"
                            tabindex="-1"
                            style={{ animationDelay: "0.4s" }}
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
                <div
                  class="single-slider slider-bg2 slider-height d-flex align-items-center slick-slide slick-current slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  tabindex="0"
                  style={{
                    width: "1024px",
                    position: "relative",
                    left: "-1024px",
                    top: "0px",
                    zIndex: 999,
                    opacity: 1,
                    height:"700px",
                  }}
                >
                  <div class="container">
                    <div class="row justify-content-end">
                      <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10">
                        <div className="hero-caption text-center">
                          <span>Fashion Sale</span>
                          <h1
                            data-animation="bounceIn"
                            data-delay="0.2s"
                            class=""
                            style={{ animationDelay: "0.2s" }}
                          >
                            Minimal Menz Style
                          </h1>
                          <p
                            data-animation="fadeInUp"
                            data-delay="0.4s"
                            class=""
                            style={{ animationDelay: "0.4s" }}
                          >
                            Consectetur adipisicing elit. Laborum fuga incidunt
                            laboriosam voluptas iure, delectus dignissimos
                            facilis neque nulla earum.
                          </p>
                          <a
                             
                            class="btn_1 hero-btn"
                            data-animation="fadeInUp"
                            data-delay="0.7s"
                            tabindex="0"
                            style={{ animationDelay: "0.7s" }}
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- slider Area End--> */}
        {/* <!-- items Product 1  Start--> */}
        {/* <section className="items-product1 pt-30">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="single-items mb-20">
                  <div className="items-img">
                    <img src="assets/img/gallery/items1.jpg" alt="" />
                  </div>
                  <div className="items-details">
                    <h4>
                      <a href="pro-details.html">Men's Fashion</a>
                    </h4>
                    <a href="pro-details.html" className="browse-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="single-items mb-20">
                  <div className="items-img">
                    <img src="assets/img/gallery/items2.jpg" alt="" />
                  </div>
                  <div className="items-details">
                    <h4>
                      <a href="pro-details.html">Women's Fashion</a>
                    </h4>
                    <a href="pro-details.html" className="browse-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="single-items mb-20">
                  <div className="items-img">
                    <img src="assets/img/gallery/items3.jpg" alt="" />
                  </div>
                  <div className="items-details">
                    <h4>
                      <a href="pro-details.html">Baby Fashion</a>
                    </h4>
                    <a href="pro-details.html" className="browse-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*  */}
        <section className="home-blog">
          <div className="container">
            <div className="row justify-content-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                <div className="section-tittle text-center mb-40">
                  <h2>Latest News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blogs mb-30">
                  <div className="blog-img">
                    <a href="pro-details.html">
                      <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog1.jpg.webp" alt="" />
                    </a>
                  </div>
                  <div className="blogs-cap">
                    <span>Fashion Tips</span>
                    <h5>
                      <a href="pro-details.html">
                        What Curling Irons Are The Best Ones
                      </a>
                    </h5>
                    <p>
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus..
                    </p>
                    <a href="pro-details.html" className="red-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blogs mb-30">
                  <div className="blog-img">
                    <a href="pro-details.html">
                      <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog2.jpg.webp" alt="" />
                    </a>
                  </div>
                  <div className="blogs-cap">
                    <span>Fashion Tips</span>
                    <h5>
                      <a href="pro-details.html">
                        Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes
                      </a>
                    </h5>
                    <p>
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus..
                    </p>
                    <a href="pro-details.html" className="red-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blogs mb-30">
                  <div className="blog-img">
                    <a href="pro-details.html">
                      <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog3.jpg.webp" alt="" />
                    </a>
                  </div>
                  <div className="blogs-cap">
                    <span>Fashion Tips</span>
                    <h5>
                      <a href="pro-details.html">
                        What Curling Irons Are The Best Ones
                      </a>
                    </h5>
                    <p>
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus..
                    </p>
                    <a href="pro-details.html" className="red-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="categories-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="single-cat mb-50 wow fadeInUp text-center"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div className="cat-icon">
                    <img src='https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg' alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>Fast & Free Delivery</h5>
                    <p>Free delivery on all orders</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="single-cat mb-50 wow fadeInUp text-center"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div className="cat-icon">
                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>Secure Payment</h5>
                    <p>Free delivery on all orders</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="single-cat mb-50 wow fadeInUp text-center"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  <div className="cat-icon">
                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services3.svg" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>Money Back Guarantee</h5>
                    <p>Free delivery on all orders</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="single-cat mb-50 wow fadeInUp text-center"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  <div className="cat-icon">
                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg" alt="" />
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
      <Footer />
    </>
  );
};

export default Home;
