import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="s-footer">
        <div className="s-footer__main">
          <div className="row">
            <div className="col-two md-four mob-full s-footer__sitelinks">
              <h4>Quick Links</h4>

              <ul className="s-footer__linklist">
                <li>
                  <a  >Home</a>
                </li>
                <li>
                  <a  >Blog</a>
                </li>
                <li>
                  <a  >Styles</a>
                </li>
                <li>
                  <a  >About</a>
                </li>
                <li>
                  <a  >Contact</a>
                </li>
                <li>
                  <a  >Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-two md-four mob-full s-footer__archives">
              <h4>Archives</h4>

              <ul className="s-footer__linklist">
                <li>
                  <a  >January 2018</a>
                </li>
                <li>
                  <a  >December 2017</a>
                </li>
                <li>
                  <a  >November 2017</a>
                </li>
                <li>
                  <a  >October 2017</a>
                </li>
                <li>
                  <a  >September 2017</a>
                </li>
                <li>
                  <a  >August 2017</a>
                </li>
              </ul>
            </div>

            <div className="col-two md-four mob-full s-footer__social">
              <h4>Social</h4>

              <ul className="s-footer__linklist">
                <li>
                  <a  >Facebook</a>
                </li>
                <li>
                  <a  >Instagram</a>
                </li>
                <li>
                  <a  >Twitter</a>
                </li>
                <li>
                  <a  >Pinterest</a>
                </li>
                <li>
                  <a>Google+</a>
                </li>
                <li>
                  <a>LinkedIn</a>
                </li>
              </ul>
            </div>

            <div className="col-five md-full end s-footer__subscribe">
              <h4>Our Newsletter</h4>

              <p>
                Sit vel delectus amet officiis repudiandae est voluptatem.
                Tempora maxime provident nisi et fuga et enim exercitationem
                ipsam. Culpa consequatur occaecati.
              </p>

              <div className="subscribe-form">
                <form id="mc-form" className="group">
                  <input
                    type="email"
                    className="email"
                    id="mc-email"
                    placeholder="Email Address"
                    required
                  />

                  <input type="submit" name="subscribe" value="Send" />

                  <label  className="subscribe-message"></label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
