import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../App.css'
import shutterbug from "../assets/images/shutterbug-400.jpg";
import jump from "../assets/images/jump-400.jpg";
import wheel from "../assets/images/wheel-400.jpg";
import cookies from "../assets/images/cookies-150.jpg";
import beetle from "../assets/images/beetle-150.jpg";
import tulips from "../assets/images/tulips-150.jpg";
import salad from "../assets/images/salad-150.jpg";
import lamp from "../assets/images/lamp-400.jpg";


function Contact() {
  return (
    <>
    <Header/>
      <section classname="s-content s-content--narrow">

<div classname="row">

    <div classname="s-content__header col-full">
        <h1 classname="s-content__header-title">
            Feel Free To Contact Us.
        </h1>
    </div>

    <div classname="s-content__media col-full">
        <div id="map-wrap">
            <div id="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.703862534159!2d70.77821700504678!3d22.291002633035955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb147744699d%3A0x2060a6cbc4a6e0bd!2sRed%20%26%20White%20Multimedia%20Education%20-%20Kalawad%20Road!5e0!3m2!1sen!2sin!4v1730007362429!5m2!1sen!2sin" width="1000" height="420" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    </div> 

    <div classname="col-full s-content__main">

        <p classname="lead">Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat.</p>

        <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </p>

        <div classname="row">
            <div classname="col-six tab-full">
                <h3>Where to Find Us</h3>

                <p>
                1600 Amphitheatre Parkway<br/>
                Mountain View, CA<br/>
                94043 US
                </p>

            </div>

            <div classname="col-six tab-full">
                <h3>Contact Info</h3>

                <p>
                <a href="/cdn-cgi/l/email-protection" classname="__cf_email__" >Karanraval424@gmail.com</a> <br/>
                Phone: (+91) 63547 15134 
                </p>

            </div>
        </div> 

        <h3>Say Hello.</h3>

        <form name="cForm" id="cForm" method="post" action="">
            <fieldset>

                <div classname="form-field">
                    <input name="cName" type="text" id="cName" classname="full-width" placeholder="Your Name" value=""/>
                </div>

                <div classname="form-field">
                    <input name="cEmail" type="text" id="cEmail" classname="full-width" placeholder="Your Email" value=""/>
                </div>

                <div classname="form-field">
                    <input name="cWebsite" type="text" id="cWebsite" classname="full-width" placeholder="Website"  value=""/>
                </div>

                <div classname="message form-field">
                <textarea name="cMessage" id="cMessage" classname="full-width" placeholder="Your Message" ></textarea>
                </div>

                <button type="submit" classname="submit btn btn--primary full-width">Submit</button>

            </fieldset>
        </form> 


    </div> 

</div> 

</section>


<section classnameName="s-extra">
        <div classnameName="row top">
          <div classnameName="col-eight md-six tab-full popular">
            <h3>Popular Posts</h3>

            <div classnameName="block-1-2 block-m-full popular__posts">
              <article classnameName="col-block popular__post">
                <a classnameName="popular__thumb">
                  <img src={wheel} alt="" />
                </a>
                <h5>
                  <a>Visiting Theme Parks Improves Your Health.</a>
                </h5>
                <section classnameName="popular__meta">
                  <span classnameName="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span classnameName="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-19">Dec 19, 2017</time>
                  </span>
                </section>
              </article>
              <article classnameName="col-block popular__post">
                <a classnameName="popular__thumb">
                  <img src={shutterbug} alt="" />
                </a>
                <h5>
                  <a>Key Benefits Of Family Photography.</a>
                </h5>
                <section classnameName="popular__meta">
                  <span classnameName="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span classnameName="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-18">Dec 18, 2017</time>
                  </span>
                </section>
              </article>
              <article classnameName="col-block popular__post">
                <a classnameName="popular__thumb">
                  <img src={cookies} alt="" />
                </a>
                <h5>
                  <a>Absolutely No Sugar Oatmeal Cookies.</a>
                </h5>
                <section classnameName="popular__meta">
                  <span classnameName="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span classnameName="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article classnameName="col-block popular__post">
                <a classnameName="popular__thumb">
                  <img src={beetle} alt="" />
                </a>
                <h5>
                  <a>Throwback To The Good Old Days.</a>
                </h5>
                <section classnameName="popular__meta">
                  <span classnameName="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span classnameName="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article classnameName="col-block popular__post">
                <a classnameName="popular__thumb">
                  <img src={tulips} alt="" />
                </a>
                <h5>
                  <a>10 Interesting Facts About Caffeine.</a>
                </h5>
                <section classnameName="popular__meta">
                  <span classnameName="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span classnameName="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-14">Dec 14, 2017</time>
                  </span>
                </section>
              </article>
              <article classnameName="col-block popular__post">
                <a classnameName="popular__thumb">
                  <img src={salad} alt="" />
                </a>
                <h5>
                  <a>Healthy Mediterranean Salad Recipes</a>
                </h5>
                <section classnameName="popular__meta">
                  <span classnameName="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span classnameName="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-12">Dec 12, 2017</time>
                  </span>
                </section>
              </article>
            </div>
          </div>
          <div classnameName="col-four md-six tab-full about">
            <h3>About Philosophy</h3>

            <p>
              Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
              malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec sollicitudin molestie
              malesuada.
            </p>

            <ul classnameName="about__social">
              <li>
                <a>
                  <i classnameName="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i classnameName="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i classnameName="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i classnameName="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div classnameName="row bottom tags-wrap">
          <div classnameName="col-full tags">
            <h3>Tags</h3>

            <div classnameName="tagcloud">
              <a>Salad</a>
              <a>Recipe</a>
              <a>Places</a>
              <a>Tips</a>
              <a>Friends</a>
              <a>Travel</a>
              <a>Exercise</a>
              <a>Reading</a>
              <a>Running</a>
              <a>Self-Help</a>
              <a>Vacation</a>
            </div>
          </div>
        </div>
      </section>
 <Footer/>
    </>
  )
}

export default Contact