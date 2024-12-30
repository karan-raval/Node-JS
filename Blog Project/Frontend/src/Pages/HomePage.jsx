import React from "react";
import shutterbug from "../assets/images/shutterbug-400.jpg";
import jump from "../assets/images/jump-400.jpg";
import user3 from "../assets/images/user-01.jpg";
import user1 from "../assets/images/user-02.jpg";
import user2 from "../assets/images/user-03.jpg";
import user4 from "../assets/images/user-04.jpg";
import wheel from "../assets/images/wheel-400.jpg";
import cookies from "../assets/images/cookies-150.jpg";
import cookies4 from "../assets/images/cookies-400.jpg";
import beetle from "../assets/images/beetle-150.jpg";
import tulips from "../assets/images/tulips-150.jpg";
import tulips4 from "../assets/images/tulips-400.jpg";
import salad from "../assets/images/salad-150.jpg";
import lamp from "../assets/images/lamp-400.jpg";
import gallery4 from "../assets/images/lamp-400.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";
import Popularpost from "../Components/Popularpost";

const HomePage = () => {
  return (
    <>
      <section className="s-pageheader s-pageheader--home">
        <Header />
        <div className="pageheader-content row">
          <div className="col-full">
            <div className="featured">
              <div className="featured__column featured__column--big">
                <div className="entry bg1">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>Music</a>
                    </span>

                    <h1>
                      <a>
                        What Your Music Preference Says About You and Your
                        Personality.
                      </a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} alt="" />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 29, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured__column featured__column--small">
                <div className="entry bg2">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>Management</a>
                    </span>

                    <h1>
                      <a>The Pomodoro Technique Really Works.</a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 27, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="entry bg3">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>LifeStyle</a>
                    </span>

                    <h1>
                      <a title="">Throwback To The Good Old Days.</a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} alt="" />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 21, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-content">
        <div className="row masonry-wrap">
          <div className="masonry" id="sy3">
            <div className="grid-sizer"></div>

            <article
              className="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy4"
            >
              <div className="entry__thumb">
                <a className="entry__thumb-link">
                  <img src={lamp} alt="" />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a>December 15, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a>Just a Standard Format Post.</a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Design</a>
                    <a>Photography</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              className="masonry__brick entry format-quote aos-init aos-animate"
              data-aos="fade-up"
              id="sy5"
            >
              <div className="entry__thumb">
                <blockquote>
                  <p>
                    Good design is making something intelligible and memorable.
                    Great design is making something memorable and meaningful.
                  </p>

                  <cite>Dieter Rams</cite>
                </blockquote>
              </div>
            </article>

            <article
              className="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy6"
            >
              <div className="entry__thumb">
                <a className="entry__thumb-link">
                  <img src={tulips4} alt="" />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a>December 15, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a>10 Interesting Facts About Caffeine.</a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Health</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              className="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy7"
            >
              <div className="entry__thumb">
                <a className="entry__thumb-link">
                  <img src={cookies4} alt="" />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a>No Sugar Oatmeal Cookies.</a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Cooking</a>
                    <a>Health</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              className="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy8"
            >
              <div className="entry__thumb">
                <a className="entry__thumb-link">
                  <img src={wheel} alt="" />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a>Visiting Theme Parks Improves Your Health.</a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a href="#">Health</a>
                    <a href="#">Lifestyle</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              className="masonry__brick entry format-video aos-init aos-animate"
              data-aos="fade-up"
              id="sy9"
            >
              <div className="entry__thumb video-image">
                <a data-lity="">
                  <img src={shutterbug} alt="" />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a href="single-video.html">December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a href="single-video.html">
                      Key Benefits Of Family Photography.
                    </a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Family</a>
                    <a>Photography</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              className="masonry__brick entry format-gallery aos-init aos-animate"
              data-aos="fade-up"
              id="sy10"
            >
              <div className="entry__thumb slider">
                <div
                  className="slider__slides slick-initialized slick-slider slick-dotted"
                  role="toolbar"
                >
                  <div aria-live="polite" className="slick-list draggable">
                    <div className="slick-track" id="sy11" role="listbox">
                      <div
                        className="slider__slide slick-slide slick-current slick-active"
                        data-slick-index="0"
                        aria-hidden="false"
                        tabIndex="-1"
                        role="option"
                        aria-describedby="slick-slide00"
                        id="sy23"
                      >
                        <img
                          src={gallery4}
                          alt=""
                        />
                      </div>
                      <div
                        className="slider__slide slick-slide"
                        data-slick-index="1"
                        aria-hidden="true"
                        tabIndex="-1"
                        role="option"
                        aria-describedby="slick-slide01"
                        id="sy12"
                      >
                        <img
                          src="images/thumbs/masonry/gallery/gallery-2-400.jpg"
                          srcSet="images/thumbs/masonry/gallery/gallery-2-400.jpg 1x, images/thumbs/masonry/gallery/gallery-2-800.jpg 2x"
                          alt=""
                        />
                      </div>
                      <div
                        className="slider__slide slick-slide"
                        data-slick-index="2"
                        aria-hidden="true"
                        tabIndex="-1"
                        role="option"
                        aria-describedby="slick-slide02"
                        id="sy13"
                      >
                        <img
                          src="images/thumbs/masonry/gallery/gallery-3-400.jpg"
                          srcSet="images/thumbs/masonry/gallery/gallery-3-400.jpg 1x, images/thumbs/masonry/gallery/gallery-3-800.jpg 2x"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <ul className="slick-dots" role="tablist">
                    <li
                      className="slick-active"
                      aria-hidden="false"
                      role="presentation"
                      aria-selected="true"
                      aria-controls="navigation00"
                      id="slick-slide00"
                    >
                      <button
                        type="button"
                        data-role="none"
                        role="button"
                        tabIndex="0"
                      >
                        1
                      </button>
                    </li>
                    <li
                      aria-hidden="true"
                      role="presentation"
                      aria-selected="false"
                      aria-controls="navigation01"
                      id="slick-slide01"
                    >
                      <button
                        type="button"
                        data-role="none"
                        role="button"
                        tabIndex="0"
                      >
                        2
                      </button>
                    </li>
                    <li
                      aria-hidden="true"
                      role="presentation"
                      aria-selected="false"
                      aria-controls="navigation02"
                      id="slick-slide02"
                    >
                      <button
                        type="button"
                        data-role="none"
                        role="button"
                        tabIndex="0"
                      >
                        3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a href="single-gallery.html">December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a href="single-gallery.html">
                      Workspace Design Trends and Ideas.
                    </a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Work</a>
                    <a>Management</a>
                  </span>
                </div>
              </div>
            </article>

            <article
              className="masonry__brick entry format-audio aos-init aos-animate"
              data-aos="fade-up"
              id="sy14"
            >
              <div className="entry__thumb">
                <a href="single-audio.html" className="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/guitarman-400.jpg"
                    srcSet="images/thumbs/masonry/guitarman-400.jpg 1x, images/thumbs/masonry/guitarman-800.jpg 2x"
                    alt=""
                  />
                </a>
                <div className="audio-wrap">
                  <span className="mejs__offscreen">Audio Player</span>
                  <div
                    id="mep_0 sy15"
                    className="mejs__container mejs__container-keyboard-inactive mejs__audio"
                    tabIndex="0"
                    role="application"
                    aria-label="Audio Player"
                  >
                    <div className="mejs__inner">
                      <div className="mejs__mediaelement">
                       
                      </div>
                      <div className="mejs__layers">
                        <div className="mejs__poster mejs__layer" id="sy22"></div>
                      </div>
                      <div className="mejs__controls">
                        <div className="mejs__button mejs__playpause-button mejs__play">
                          <button
                            type="button"
                            aria-controls="mep_0"
                            title="Play"
                            aria-label="Play"
                            tabIndex="0"
                          ></button>
                        </div>
                        <div
                          className="mejs__time mejs__currenttime-container"
                          role="timer"
                          aria-live="off"
                        >
                          <span className="mejs__currenttime">00:00</span>
                        </div>
                        <div className="mejs__time-rail">
                          <span
                            className="mejs__time-total mejs__time-slider"
                            role="slider"
                            tabIndex="0"
                            aria-label="Time Slider"
                          >
                            <span className="mejs__time-buffering" id="sy21"></span>
                            <span className="mejs__time-loaded"></span>
                            <span className="mejs__time-current"></span>
                            <span className="mejs__time-hovered no-hover"></span>
                            <span className="mejs__time-handle">
                              <span className="mejs__time-handle-content"></span>
                            </span>
                            <span className="mejs__time-float">
                              <span className="mejs__time-float-current">
                                00:00
                              </span>
                              <span className="mejs__time-float-corner"></span>
                            </span>
                          </span>
                        </div>
                        <div className="mejs__time mejs__duration-container">
                          <span className="mejs__duration">00:00</span>
                        </div>
                        <div className="mejs__button mejs__volume-button mejs__mute">
                          <button
                            type="button"
                            aria-controls="mep_0"
                            title="Mute"
                            aria-label="Mute"
                            tabIndex="0"
                          ></button>
                        </div>
                        <a
                          className="mejs__horizontal-volume-slider"
                          aria-label="Volume Slider"
                          role="slider"
                        >
                          <span className="mejs__offscreen">
                            Use Up/Down Arrow keys to increase or decrease
                            volume.
                          </span>
                          <div className="mejs__horizontal-volume-total">
                            <div
                              className="mejs__horizontal-volume-current"
                              id="sy20"
                            ></div>
                            <div
                              className="mejs__horizontal-volume-handle"
                              id="sy19"
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a href="single-audio.html">December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a href="single-audio.html">
                      What Your Music Preference Says About You and Your
                      Personality.
                    </a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Music</a>
                    <a>Lifestyle</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              className="masonry__brick entry format-link aos-init aos-animate"
              data-aos="fade-up"
              id="sy16"
            >
              <div className="entry__thumb">
                <div className="link-wrap">
                  <p>
                    The Only Resource You Will Need To Start a Blog Using
                    WordPress.
                  </p>
                  <cite>
                    <a target="_blank" href="https://colorlib.com/">
                      https://colorlib.com
                    </a>
                  </cite>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              className="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy2"
            >
              <div className="entry__thumb">
                <a className="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/jump-400.jpg"
                    srcSet="images/thumbs/masonry/jump-400.jpg 1x, images/thumbs/masonry/jump-800.jpg 2x"
                    alt=""
                  />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a>Create Meaningful Family Moments.</a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Family</a>
                    <a>Relationship</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              id="sy1"
              className="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="entry__thumb">
                <a className="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/beetle-400.jpg"
                    srcSet="images/thumbs/masonry/beetle-400.jpg 1x, images/thumbs/masonry/beetle-800.jpg 2x"
                    alt=""
                  />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a>Throwback To The Good Old Days.</a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Lifestyle</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              className="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy17"
            >
              <div className="entry__thumb">
                <a className="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/fuji-400.jpg"
                    srcSet="images/thumbs/masonry/fuji-400.jpg 1x, images/thumbs/masonry/fuji-800.jpg 2x"
                    alt=""
                  />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a>Just Another Standard Format Post.</a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Design</a>
                    <a>Photography</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}

            <article
              className="masonry__brick entry format-standard aos-init aos-animate"
              data-aos="fade-up"
              id="sy18"
            >
              <div className="entry__thumb">
                <a className="entry__thumb-link">
                  <img
                    src="images/thumbs/masonry/sydney-400.jpg"
                    srcSet="images/thumbs/masonry/sydney-400.jpg 1x, images/thumbs/masonry/sydney-800.jpg 2x"
                    alt=""
                  />
                </a>
              </div>

              <div className="entry__text">
                <div className="entry__header">
                  <div className="entry__date">
                    <a>December 10, 2017</a>
                  </div>
                  <h1 className="entry__title">
                    <a>Planning Your First Trip to Sydney.</a>
                  </h1>
                </div>
                <div className="entry__excerpt">
                  <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed commodo
                    est ad minim elit reprehenderit nisi officia aute incididunt
                    velit sint in aliqua...
                  </p>
                </div>
                <div className="entry__meta">
                  <span className="entry__meta-links">
                    <a>Travel</a>
                    <a>Vacation</a>
                  </span>
                </div>
              </div>
            </article>
            {/* <!-- end article --> */}
          </div>
          {/* <!-- end masonry --> */}
        </div>

        <div className="row">
          <div className="col-full">
            <nav className="pgn">
              <ul>
                <li>
                  <a className="pgn__prev" href="#0">
                    Prev
                  </a>
                </li>
                <li>
                  <a className="pgn__num" href="#0">
                    1
                  </a>
                </li>
                <li>
                  <span className="pgn__num current">2</span>
                </li>
                <li>
                  <a className="pgn__num" href="#0">
                    3
                  </a>
                </li>
                <li>
                  <a className="pgn__num" href="#0">
                    4
                  </a>
                </li>
                <li>
                  <a className="pgn__num" href="#0">
                    5
                  </a>
                </li>
                <li>
                  <span className="pgn__num dots">…</span>
                </li>
                <li>
                  <a className="pgn__num" href="#0">
                    8
                  </a>
                </li>
                <li>
                  <a className="pgn__next" href="#0">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <Popularpost/>
      <Footer />
    </>
  );
};

export default HomePage;
