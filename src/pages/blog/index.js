import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Sidebar from "../../components/Sidebar";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="l-container">
          <nav>
            <div className="c-breadcrumb">
              <ul className="c-breadcrumb-list">
                <li>
                  <Link to="index.html">トップページ</Link>
                </li>
                <li>
                  <h1 className="p-archive-title">最新の記事</h1>
                </li>
              </ul>
            </div>
          </nav>
          <div className="l-archive">
            <div className="l-archive-inner">
              <BlogRoll pageName="archive" />
            </div>
            <aside>
              <Sidebar />
            </aside>
          </div>
        </div>
      </Layout>
    );
  }
}
