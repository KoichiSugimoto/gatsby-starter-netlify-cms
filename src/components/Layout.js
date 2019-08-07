import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, Link, graphql } from "gatsby";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/atoms/Logo";

import "./scss/main.sass";

class TemplateWrapperScroll extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.getElementPos = this.getElementPos.bind(this);
    this.state = {
      headerFix: false,
      footerFix: true,
      headerPos: 0,
      footerPos: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.getElementPos);
    process.nextTick(this.getElementPos);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.getElementPos);
  }
  handleScroll(event) {
    // Header(setState): fix / release
    if (
      window.scrollY > this.state.headerPos &&
      this.state.headerFix !== true
    ) {
      this.setState({ headerFix: true });
    }
    if (window.scrollY === 0 && this.state.headerFix === true) {
      this.setState({ headerFix: false });
    }
    // Footer(setState):fix / release
    if (
      window.scrollY > this.state.footerPos &&
      this.state.footerFix === true
    ) {
      this.setState({ footerFix: false });
    }
    if (
      window.scrollY < this.state.footerPos &&
      this.state.footerFix !== true
    ) {
      this.setState({ footerFix: true });
    }
  }
  getHeaderPos() {
    const header = document.getElementById("header");
    return header.clientHeight;
  }
  getFooterPos() {
    const footer = document.getElementById("footer");
    return footer.getBoundingClientRect().top - window.innerHeight;
  }
  getElementPos() {
    this.setState({
      headerPos: this.getHeaderPos(),
      footerPos: this.getFooterPos()
    });
  }
  render() {
    const Tag = this.props.isFront ? "h1" : "p";
    return (
      <div className={this.state.headerFix ? "is-nav-fixed" : ""}>
        <Helmet>
          <html lang="ja" />
          <title>{this.props.data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={this.props.data.site.siteMetadata.description}
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
          <meta
            property="og:title"
            content={this.props.data.site.siteMetadata.title}
          />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <div className="l-wrapper">
          <header id="header">
            <div className="l-header">
              <div className="c-progressbar" />
              <Tag className="c-logo">
                <Link to="/">
                  <Logo data={this.props.data} />
                </Link>
              </Tag>
              <Navbar />
            </div>
          </header>
          <main>{this.props.children}</main>
          <Footer footerFix={this.state.footerFix} />
        </div>
      </div>
    );
  }
}

const TemplateWrapper = ({ children, isFront }) => (
  <StaticQuery
    query={headingQuery}
    render={data => (
      <TemplateWrapperScroll
        data={data}
        children={children}
        isFront={isFront}
      />
    )}
  />
);

TemplateWrapper.defaultProps = {
  isFront: false
};

TemplateWrapper.propTypes = {
  isFront: PropTypes.bool
};

const headingQuery = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default TemplateWrapper;
