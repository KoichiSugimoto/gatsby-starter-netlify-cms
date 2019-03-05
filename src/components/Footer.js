import React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="c-gotop is-fixed">
          <Link to="#">トップへ戻る</Link>
        </div>
        <div className="l-footer">
          <div className="p-footer">
            <div className="c-logo">
              <div className="c-logo-img-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 426.64 269.27"
                >
                  <defs />
                  <title>chifra</title>
                  <g id="layer_2" data-name="layer_2">
                    <g id="layer">
                      <path
                        className="cls-1"
                        d="M71.46,134.63A109.73,109.73,0,0,1,92,70.6a68.27,68.27,0,1,0,0,128.07A109.76,109.76,0,0,1,71.46,134.63Z"
                      />
                      <path
                        className="cls-2"
                        d="M292,0a134.06,134.06,0,0,0-82.17,28,110.3,110.3,0,0,1,0,213.31A134.63,134.63,0,1,0,292,0Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <nav>
              <div className="p-footer-nav">
                <ul className="p-footer-nav-list c-footer-nav">
                  <li>
                    <Link to="/">TOP PAGE</Link>
                  </li>
                  <li>
                    <Link to="/">ARTICLE PAGE</Link>
                  </li>
                  <li>
                    <Link to="/blog">ARCHIVE PAGE</Link>
                  </li>
                  <li>
                    <Link to="/about">STATIC PAGE</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="p-footer-copyright">
              <p className="c-copyright">
                <span>&copy;</span> 2019
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
