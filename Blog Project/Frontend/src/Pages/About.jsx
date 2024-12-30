import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
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
      <section className="s-content s-content--narrow">
        <div className="row">
          <div className="s-content__header col-full">
            <h1 className="s-content__header-title">Learn More About Us.</h1>
          </div>

          <div className="s-content__media col-full">
            <div className="s-content__post-thumb">
              <img
                src="https://preview.colorlib.com/theme/philosophy/images/thumbs/about/about-2000.jpg.webp"
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt=""
              />
            </div>
          </div>

          <div className="col-full s-content__main">
            <p className="lead">
              A Dynamic Platform for Blogging Enthusiasts <br /> The Blog
              Application is a user-centric, feature-rich platform designed to
              make blogging effortless and enjoyable. This application allows
              users to create, read, update, and manage their blogs efficiently
              within a fully responsive website that delivers a seamless
              experience across all devices, whether desktop, tablet, or mobile.
              Key Features User Authentication Login System: Only registered
              users can create, edit, or delete blogs. Visitors without an
              account can browse and read blogs but cannot contribute content,
              ensuring controlled and secure publishing. Secure Authentication:
              User login credentials are encrypted, ensuring data safety and
              secure access to the platform. Create and Manage Blogs Blog
              Creation: Authenticated users can craft engaging blogs with a
              user-friendly editor, featuring options to add titles,
              descriptions, and images. Edit and Update: Users can revisit their
              published blogs to update or enhance content effortlessly. Delete
              Blogs: Unwanted or outdated blogs can be removed with a single
              click, keeping the user’s content organized. Blog Whitelist
              Feature Favorite Blogs: Users can add specific blogs to their
              personal whitelist for quick access, creating a personalized
              reading list tailored to their interests. Manage Whitelisted
              Blogs: Add or remove blogs from the whitelist anytime for enhanced
              flexibility. Responsive Design The application boasts a fully
              responsive design, adapting flawlessly to various screen sizes.
              Whether users are browsing on a smartphone, tablet, or desktop,
              they will experience consistent performance and visual appeal.
              User Restrictions Non-authenticated users are restricted from
              creating or managing blogs, ensuring content integrity and
              accountability. This feature helps maintain a professional and
              secure blogging environment. Additional Features Search and
              Filter: Users can easily search for specific blogs or filter
              content based on categories or tags. Rich User Interface: The
              intuitive interface enhances usability, making the platform
              accessible even for non-technical users. Real-Time Updates: Blogs
              and user actions reflect changes instantly, providing a dynamic
              experience. SEO Optimization: Each blog post is optimized for
              search engines to enhance visibility and reach. This blog
              application is perfect for writers, professionals, and enthusiasts
              who want a reliable and accessible platform to share their
              thoughts and ideas. Its robust features, responsive design, and
              secure user authentication system ensure a smooth and enjoyable
              blogging experience for both creators and readers.
            </p>

            <div className="row block-1-2 block-tab-full">
              <div className="col-block">
                <h3 className="quarter-top-margin">Who We Are.</h3>
                <br />
                <p>
                  We are a passionate team of storytellers and technologists
                  dedicated to creating a space where ideas come to life,
                  connecting people globally through impactful and accessible
                  blogging tools.
                </p>
              </div>

              <div className="col-block">
                <h3 className="quarter-top-margin">Our Mission.</h3>
                <br />
                <p>
                  To empower individuals to share their stories and ideas
                  through a secure, user-friendly blogging platform that fosters
                  creativity, connection, and self-expression.
                </p>
              </div>

              <div className="col-block">
                <h3 className="quarter-top-margin">Our Vision.</h3>
                <br />
                <p>
                  To become the leading platform for bloggers worldwide,
                  inspiring impactful storytelling through innovation,
                  inclusivity, and exceptional user experiences.
                </p>
              </div>

              <div className="col-block">
                <h3 className="quarter-top-margin">Our Values.</h3>
                <br />
                <p>
                  We prioritize creativity, inclusivity, and a user-first
                  approach to empower diverse voices through blogging.
                  Integrity, security, and simplicity guide our platform,
                  ensuring a seamless and secure experience. We embrace
                  innovation and continuous growth to stay ahead and serve our
                  community better.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- end s-content__main --> */}
        </div>
        {/* <!-- end row --> */}
      </section>

      <section className="s-extra">
        <div className="row top">
          <div className="col-eight md-six tab-full popular">
            <h3>Popular Posts</h3>

            <div className="block-1-2 block-m-full popular__posts">
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={wheel} alt="" />
                </a>
                <h5>
                  <a>Visiting Theme Parks Improves Your Health.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>
                    <time dateTime="2017-12-19">Dec 19, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={shutterbug} alt="" />
                </a>
                <h5>
                  <a>Key Benefits Of Family Photography.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-18">Dec 18, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={cookies} alt="" />
                </a>
                <h5>
                  <a>Absolutely No Sugar Oatmeal Cookies.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={beetle} alt="" />
                </a>
                <h5>
                  <a>Throwback To The Good Old Days.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={tulips} alt="" />
                </a>
                <h5>
                  <a>10 Interesting Facts About Caffeine.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-14">Dec 14, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={salad} alt="" />
                </a>
                <h5>
                  <a>Healthy Mediterranean Salad Recipes</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-12">Dec 12, 2017</time>
                  </span>
                </section>
              </article>
            </div>
          </div>
          <div className="col-four md-six tab-full about">
            <h3>About Philosophy</h3>

            <p>
              Our blog app is a user-friendly platform for creating, managing,
              and sharing blogs. With features like secure login, blog
              whitelisting, and a fully responsive design, it ensures a seamless
              experience across devices. Only authenticated users can create or
              manage blogs, maintaining a secure and professional environment
              for storytelling..
            </p>

            <ul className="about__social">
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
          </div>
        </div>
        <div className="row bottom tags-wrap">
          <div className="col-full tags">
            <h3>Tags</h3>

            <div className="tagcloud">
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
      <Footer />
    </>
  );
}

export default About;