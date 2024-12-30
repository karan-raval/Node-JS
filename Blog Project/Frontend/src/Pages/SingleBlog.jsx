import React from "react";
import "../App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import standard1000 from "../assets/images/standard-1000.jpg";
import wheel150 from "../assets/images/wheel-150.jpg";
import shutterbug150 from "../assets/images/shutterbug-150.jpg";
import beetle150 from "../assets/images/beetle-150.jpg";
import salad150 from "../assets/images/salad-150.jpg";
import cookies150 from "../assets/images/cookies-150.jpg";
import user1 from "../assets/images/user-01.jpg";
import user3 from "../assets/images/user-03.jpg";
import user4 from "../assets/images/user-04.jpg";
import user2 from "../assets/images/user-02.jpg";
import tulips150 from "../assets/images/tulips-150.jpg";
const SingleBlog = () => {
  return (
    <>
      <div class="s-pageheader">
        <Header />
      </div>
      <section className="s-content s-content--narrow s-content--no-padding-bottom">
        <article className="row format-standard">
          <div className="s-content__header col-full">
            <ul className="s-content__header-meta">
              <li className="date">December 16, 2017</li>
              <li className="cat">
                In
                <a>Lifestyle</a>
                <a>Travel</a>
              </li>
            </ul>
          </div>

          <div className="s-content__media col-full">
            <div className="s-content__post-thumb">
              <img
                src={standard1000}
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt=""
              />
            </div>
          </div>

          <div className="col-full s-content__main">
            <p className="lead">
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
          </div>
        </article>

        <div className="comments-wrap">
          <div id="comments" className="row">
            <div className="col-full">
              <h3 className="h2">5 Comments</h3>

              <ol className="commentlist">
                <li className="depth-1 comment">
                  <div className="comment__avatar">
                    <img
                      width="50"
                      height="50"
                      className="avatar"
                      src={user1}
                      alt=""
                    />
                  </div>

                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>Itachi Uchiha</cite>

                      <div className="comment__meta">
                        <time className="comment__time">
                          Dec 16, 2017 @ 23:05
                        </time>
                        <a className="reply">Reply</a>
                      </div>
                    </div>

                    <div className="comment__text">
                      <p>
                        Adhuc quaerendum est ne, vis ut harum tantas noluisse,
                        id suas iisque mei. Nec te inani ponderum vulputate,
                        facilisi expetenda has et. Iudico dictas scriptorem an
                        vim, ei alia mentitum est, ne has voluptua praesent.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="thread-alt depth-1 comment">
                  <div className="comment__avatar">
                    <img
                      width="50"
                      height="50"
                      className="avatar"
                      src={user4}
                      alt=""
                    />
                  </div>

                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>John Doe</cite>

                      <div className="comment__meta">
                        <time className="comment__time">
                          Dec 16, 2017 @ 24:05
                        </time>
                        <a className="reply">Reply</a>
                      </div>
                    </div>

                    <div className="comment__text">
                      <p>
                        Sumo euismod dissentiunt ne sit, ad eos iudico qualisque
                        adversarium, tota falli et mei. Esse euismod urbanitas
                        ut sed, et duo scaevola pericula splendide. Primis
                        veritus contentiones nec ad, nec et tantas semper
                        delicatissimi.
                      </p>
                    </div>
                  </div>

                  <ul className="children">
                    <li className="depth-2 comment">
                      <div className="comment__avatar">
                        <img
                          width="50"
                          height="50"
                          className="avatar"
                          src={user3}
                          alt=""
                        />
                      </div>

                      <div className="comment__content">
                        <div className="comment__info">
                          <cite>Kakashi Hatake</cite>

                          <div className="comment__meta">
                            <time className="comment__time">
                              Dec 16, 2017 @ 25:05
                            </time>
                            <a className="reply">Reply</a>
                          </div>
                        </div>

                        <div className="comment__text">
                          <p>
                            Duis sed odio sit amet nibh vulputate cursus a sit
                            amet mauris. Morbi accumsan ipsum velit. Duis sed
                            odio sit amet nibh vulputate cursus a sit amet
                            mauris
                          </p>
                        </div>
                      </div>

                      <ul className="children">
                        <li className="depth-3 comment">
                          <div className="comment__avatar">
                            <img
                              width="50"
                              height="50"
                              className="avatar"
                              src={user4}
                              alt=""
                            />
                          </div>

                          <div className="comment__content">
                            <div className="comment__info">
                              <cite>John Doe</cite>

                              <div className="comment__meta">
                                <time className="comment__time">
                                  Dec 16, 2017 @ 25:15
                                </time>
                                <a className="reply">Reply</a>
                              </div>
                            </div>

                            <div className="comment__text">
                              <p>
                                Investigationes demonstraverunt lectores legere
                                me lius quod ii legunt saepius. Claritas est
                                etiam processus dynamicus, qui sequitur
                                mutationem consuetudium lectorum.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="depth-1 comment">
                  <div className="comment__avatar">
                    <img
                      width="50"
                      height="50"
                      className="avatar"
                      src={user2}
                      alt=""
                    />
                  </div>

                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>Shikamaru Nara</cite>

                      <div className="comment__meta">
                        <time className="comment-time">
                          Dec 16, 2017 @ 25:15
                        </time>
                        <a className="reply" href="#">
                          Reply
                        </a>
                      </div>
                    </div>

                    <div className="comment__text">
                      <p>
                        Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>

              <div className="respond">
                <h3 className="h2">Add Comment</h3>

                <form
                  name="contactForm"
                  id="contactForm"
                  method="post"
                  action=""
                >
                  <fieldset>
                    <div className="form-field">
                      <input
                        name="cName"
                        type="text"
                        id="cName"
                        className="full-width"
                        placeholder="Your Name"
                        value=""
                      />
                    </div>

                    <div className="form-field">
                      <input
                        name="cEmail"
                        type="text"
                        id="cEmail"
                        className="full-width"
                        placeholder="Your Email"
                        value=""
                      />
                    </div>

                    <div className="form-field">
                      <input
                        name="cWebsite"
                        type="text"
                        id="cWebsite"
                        className="full-width"
                        placeholder="Website"
                        value=""
                      />
                    </div>

                    <div className="message form-field">
                      <textarea
                        name="cMessage"
                        id="cMessage"
                        className="full-width"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="submit btn--primary btn--large full-width"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-extra">
        <div className="row top">
          <div className="col-eight md-six tab-full popular">
            <h3>Popular Posts</h3>

            <div className="block-1-2 block-m-full popular__posts">
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={wheel150} alt="" />
                </a>
                <h5>
                  <a>Visiting Theme Parks Improves Your Health.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-19">Dec 19, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={shutterbug150} alt="" />
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
                  <img src={cookies150} alt="" />
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
                  <img src={beetle150} alt="" />
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
                  <img src={tulips150} alt="" />
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
                  <img src={salad150} alt="" />
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
              Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
              malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec sollicitudin molestie
              malesuada.
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
};

export default SingleBlog;
