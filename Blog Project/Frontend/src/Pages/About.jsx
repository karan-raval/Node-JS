import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../App.css'
import shutterbug from "../assets/images/shutterbug-400.jpg";
import jump from "../assets/images/jump-400.jpg";
import wheel from "../assets/images/wheel-400.jpg";
import cookies from "../assets/images/cookies-150.jpg";
import beetle from "../assets/images/beetle-150.jpg";
import tulips from "../assets/images/tulips-150.jpg";
import salad from "../assets/images/salad-150.jpg";
import lamp from "../assets/images/lamp-400.jpg";

function About() {
  return (
    <>
      <Header />

      <section classname="s-content s-content--narrow">
        <div classname="row">
          <div classname="s-content__header col-full">
            <h1 classname="s-content__header-title">Learn More About Us.</h1>
          </div>
          {/* <!-- end s-content__header --> */}

          <div classname="s-content__media col-full">
            <div classname="s-content__post-thumb">
              <img
                src="https://preview.colorlib.com/theme/philosophy/images/thumbs/about/about-2000.jpg"
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt=""
              />
            </div>
          </div>
          {/* <!-- end s-content__media --> */}

          <div classname="col-full s-content__main">
            <p classname="lead">
              Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
              incididunt adipisicing veniam velit id fugiat enim mollit amet
              anim veniam dolor dolor irure velit commodo cillum sit nulla
              ullamco magna amet magna cupidatat qui labore cillum sit in tempor
              veniam consequat non laborum adipisicing aliqua ea nisi sint.
            </p>

            <p>
              Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
              incididunt adipisicing veniam velit id fugiat enim mollit amet
              anim veniam dolor dolor irure velit commodo cillum sit nulla
              ullamco magna amet magna cupidatat qui labore cillum sit in tempor
              veniam consequat non laborum adipisicing aliqua ea nisi sint ut
              quis proident ullamco ut dolore culpa occaecat ut laboris in sit
              minim cupidatat ut dolor voluptate enim veniam consequat occaecat
              fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
              laborum mollit quis nostrud sed sed.
            </p>

            <p>
              Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
              incididunt adipisicing veniam velit id fugiat enim mollit amet
              anim veniam dolor dolor irure velit commodo cillum sit nulla
              ullamco.
            </p>

            <div classname="row block-1-2 block-tab-full">
              <div classname="col-block">
                <h3 classname="quarter-top-margin">Who We Are.</h3>
                <p>
                  Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi
                  Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit
                  nisi pariatur fugiat deserunt dolor veniam reprehenderit
                  aliquip magna nisi consequat aliqua veniam in aute ullamco
                  Duis laborum ad non pariatur sit.
                </p>
              </div>

              <div classname="col-block">
                <h3 classname="quarter-top-margin">Our Mission.</h3>
                <p>
                  Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi
                  Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit
                  nisi pariatur fugiat deserunt dolor veniam reprehenderit
                  aliquip magna nisi consequat aliqua veniam in aute ullamco
                  Duis laborum ad non pariatur sit.
                </p>
              </div>

              <div classname="col-block">
                <h3 classname="quarter-top-margin">Our Vision.</h3>
                <p>
                  Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi
                  Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit
                  nisi pariatur fugiat deserunt dolor veniam reprehenderit
                  aliquip magna nisi consequat aliqua veniam in aute ullamco
                  Duis laborum ad non pariatur sit.
                </p>
              </div>

              <div classname="col-block">
                <h3 classname="quarter-top-margin">Our Values.</h3>
                <p>
                  Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi
                  Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit
                  nisi pariatur fugiat deserunt dolor veniam reprehenderit
                  aliquip magna nisi consequat aliqua veniam in aute ullamco
                  Duis laborum ad non pariatur sit.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- end s-content__main --> */}
        </div>
        {/* <!-- end row --> */}
      </section>
      {/* <!-- s-content --> */}

      {/* <!-- s-extra  ================================================== --> */}
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
                    <span>on</span>
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
      {/* <!-- end s-extra --> */}
      <Footer />
    </>
  );
}

export default About;

// A Dynamic Platform for Blogging Enthusiasts

// The Blog Application is a user-centric, feature-rich platform designed to make blogging effortless and enjoyable. This application allows users to create, read, update, and manage their blogs efficiently within a fully responsive website that delivers a seamless experience across all devices, whether desktop, tablet, or mobile.

// Key Features
// User Authentication

// Login System: Only registered users can create, edit, or delete blogs. Visitors without an account can browse and read blogs but cannot contribute content, ensuring controlled and secure publishing.
// Secure Authentication: User login credentials are encrypted, ensuring data safety and secure access to the platform.
// Create and Manage Blogs

// Blog Creation: Authenticated users can craft engaging blogs with a user-friendly editor, featuring options to add titles, descriptions, and images.
// Edit and Update: Users can revisit their published blogs to update or enhance content effortlessly.
// Delete Blogs: Unwanted or outdated blogs can be removed with a single click, keeping the user’s content organized.
// Blog Whitelist Feature

// Favorite Blogs: Users can add specific blogs to their personal whitelist for quick access, creating a personalized reading list tailored to their interests.
// Manage Whitelisted Blogs: Add or remove blogs from the whitelist anytime for enhanced flexibility.
// Responsive Design

// The application boasts a fully responsive design, adapting flawlessly to various screen sizes. Whether users are browsing on a smartphone, tablet, or desktop, they will experience consistent performance and visual appeal.
// User Restrictions

// Non-authenticated users are restricted from creating or managing blogs, ensuring content integrity and accountability. This feature helps maintain a professional and secure blogging environment.
// Additional Features
// Search and Filter: Users can easily search for specific blogs or filter content based on categories or tags.
// Rich User Interface: The intuitive interface enhances usability, making the platform accessible even for non-technical users.
// Real-Time Updates: Blogs and user actions reflect changes instantly, providing a dynamic experience.
// SEO Optimization: Each blog post is optimized for search engines to enhance visibility and reach.
// This blog application is perfect for writers, professionals, and enthusiasts who want a reliable and accessible platform to share their thoughts and ideas. Its robust features, responsive design, and secure user authentication system ensure a smooth and enjoyable blogging experience for both creators and readers.
