import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, Link, graphql } from "gatsby";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./main.sass";

const TemplateWrapper = ({ children, isFront }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      const Tag = isFront ? "h1" : "p";
      return (
        <div>
          <Helmet>
            <html lang="ja" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#1092cf"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </Helmet>
          <div className="l-wrapper">
            <header>
              <div className="l-header">
                <div className="c-progressbar" />
                <Tag className="c-logo">
                  <Link to="/">
                    <div className="c-logo-img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 836.97 282.98"
                      >
                        <defs />
                        <title>{data.site.siteMetadata.title}</title>
                        <desc>{data.site.siteMetadata.description}</desc>
                        <g id="layer_2" data-name="layer_2">
                          <g id="layer">
                            <path
                              className="cls-1"
                              d="M168.6,243.6a92.77,92.77,0,1,1-.24-107.14l-39.2,26.64a45.38,45.38,0,1,0,.6,53.4Z"
                            />
                            <polygon
                              className="cls-1"
                              points="229.3 282.98 229.3 111.42 278.11 94.15 278.11 282.98 229.3 282.98"
                            />
                            <path
                              className="cls-1"
                              d="M356.66,283h48.8V148.21s-.14-1.93,1.69-1.93h50.68V101.79H407.25a2,2,0,0,1-1.36-1.4s-.85-9.44,2.53-18,11.12-19.29,18.16-24.22S443.9,49,447,48.58s10.84,0,10.84,0V1.14S458.12-.13,455.3,0s-19.15,1.41-32,6.2S392.93,22,383.5,32.67,365.91,56.89,362.67,66.6s-6,28-6,36.18Z"
                            />
                            <path
                              className="cls-1"
                              d="M509.17,283H557.6s-.19-78.45,0-84.66c.19-10.13,5.82-25.53,13.8-33.6,10.12-10.24,21.63-16.33,28.23-18.16a73.88,73.88,0,0,1,14.43-2.09,1,1,0,0,0,1-1v-46s.42-1.41-1.41-1.41a104.9,104.9,0,0,0-51.5,14.36c-18.23,11-32.4,25.53-39.44,38.76s-13.52,31.35-13.52,47.68Z"
                            />
                            <path
                              className="cls-1"
                              d="M837,204.16a92.64,92.64,0,1,1,0-27.91m-90.57-30.6A44.69,44.69,0,1,0,791,190.34,44.74,44.74,0,0,0,746.36,145.65Zm42.56,31V98.4a1.56,1.56,0,0,1,1.56-1.57H837V281.2H790.48a1.56,1.56,0,0,1-1.56-1.57V204A66.23,66.23,0,0,0,791,189,38.09,38.09,0,0,0,788.92,176.7Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </Link>
                </Tag>
                <Navbar />
              </div>
            </header>
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      );
    }}
  />
);

TemplateWrapper.propTypes = {
  isFront: PropTypes.bool
};

TemplateWrapper.defaultProps = {
  isFront: false
};

export default TemplateWrapper;
