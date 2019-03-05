import React from "react";
import { Link } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import Transition from "react-transition-group/Transition";

const pageTransitionEvent = "gatsby-plugin-page-transition::exit";
const defaultStyle = {
  // Default transition styling
  transition: `all 200ms ease-in-out`,
  opacity: 0
};
const transitionStyles = {
  // Transition styling
  entering: { opacity: 1 },
  entered: { opacity: 0 },
  exiting: { opacity: 0 },
  exited: { opacity: 1 }
};

const Navbar = class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.listenHandler = this.listenHandler.bind(this);
    this.state = {
      in: false
    };
  }
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".c-menu"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-opened");
          // Change state for "p-header-nav"
          this.toggle();
        });
      });
    }
    global.window.addEventListener(pageTransitionEvent, this.listenHandler);
    this.setState({
      in: true
    });
  }
  listenHandler() {
    this.setState({
      in: false
    });
  }

  componentWillUnmount() {
    global.window.removeEventListener(pageTransitionEvent, this.listenHandler);
  }

  toggle() {
    this.setState({
      in: !this.state.in
    });
  }

  render() {
    return (
      <nav>
        <div className="c-menu">
          <span />
          <span />
          <span />
        </div>
        <PageTransition transitionTime={200}>
          <Transition in={this.state.in} timeout={200}>
            {state => (
              <div
                className="p-header-nav"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                <ul className="p-header-nav-list">
                  <li>
                    <span className="is-current">TOP PAGE</span>
                  </li>
                  <li>
                    <Link to="/blog">ARCHIVE PAGE</Link>
                  </li>
                  <li>
                    <Link to="/blog">ARTICLE PAGE PAGE</Link>
                  </li>
                  <li>
                    <Link to="/about">STATIC PAGE</Link>
                  </li>
                </ul>
              </div>
            )}
          </Transition>
        </PageTransition>
      </nav>
    );
  }
};

export default Navbar;
