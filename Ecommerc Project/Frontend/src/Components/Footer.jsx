import React from 'react'
import logo2_footer from'../assets/image/logo2_footer.png'
const Footer = () => {
  return (
    <>
     <footer>
        <div className="footer-wrapper gray-bg">
            <div className="footer-area footer-padding">
             {/* <!--? Subscribe Area Start --> */}
             <section className="subscribe-area">
                <div className="container">
                    <div className="row justify-content-between subscribe-padding">
                        <div className="col-xxl-3 col-xl-3 col-lg-4">
                            <div className="subscribe-caption">
                                <h3>Subscribe Newsletter</h3>
                                <p>Subscribe newsletter to get 5% on all products.</p>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
                            <div className="subscribe-caption">
                                <form >
                                    <input type="text" placeholder="Enter your email"/>
                                    <button className="subscribe-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-4">
                            {/* <!-- social --> */}
                            <div className="footer-social">
                                <a ><i className="fab fa-facebook"></i></a>
                                <a  ><i className="fab fa-instagram"></i></a>
                                <a  ><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Subscribe Area End --> */}
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8">
                        <div className="single-footer-caption mb-50">
                            <div className="single-footer-caption mb-20">
                                {/* <!-- logo --> */}
                                <div className="footer-logo mb-35">
                                    <a href="index.html"><img src={logo2_footer} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Shop Men</h4>
                                <ul>
                                    <li><a  >Clothing Fashion</a></li>
                                    <li><a  >Winter</a></li>
                                    <li><a  >Summer</a></li>
                                    <li><a  >Formal</a></li>
                                    <li><a  >Casual</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Shop Women</h4>
                                <ul>
                                    <li><a  >Clothing Fashion</a></li>
                                    <li><a  >Winter</a></li>
                                    <li><a  >Summer</a></li>
                                    <li><a  >Formal</a></li>
                                    <li><a  >Casual</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Baby Collection</h4>
                                <ul>
                                    <li><a  >Clothing Fashion</a></li>
                                    <li><a  >Winter</a></li>
                                    <li><a  >Summer</a></li>
                                    <li><a  >Formal</a></li>
                                    <li><a  >Casual</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a  >Track Your Order</a></li>
                                    <li><a  >Support</a></li>
                                    <li><a  >FAQ</a></li>
                                    <li><a  >Carrier</a></li>
                                    <li><a  >About</a></li>
                                    <li><a  >Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
</footer>
    </>
  )
}

export default Footer