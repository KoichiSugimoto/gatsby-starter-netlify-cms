import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="p-sidebar">
        <header>
          <h3 className="p-sidebar-title">サイドバータイトル</h3>
        </header>
        {/* <p>{content}</p> */}
        <section>
          <div className="p-sidebar-tree">
            <ul className="p-sidebar-tree-list">
              <li>
                <Link to="#">test</Link>
              </li>
              <li>
                <Link to="#">test</Link>
              </li>
              <li>
                <Link to="#">test</Link>
              </li>
              <li>
                <Link to="#">test</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

Sidebar.propTypes = {
  content: PropTypes.node
};
