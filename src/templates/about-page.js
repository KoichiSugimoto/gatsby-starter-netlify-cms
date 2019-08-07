import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="l-container">
      <div className="l-static">
        <article className="p-static">
          <div className="p-static-thumb">
            <img src="#" alt={title} title={title} />
          </div>
          <div className="p-static-entry">
            <header>
              <h3 className="p-static-entry-title">{title}</h3>
              <div className="p-static-entry-meta">
                <div className="p-static-entry-meta-date">YYYY/MM/DD</div>
                <div className="p-static-entry-meta-tags">
                  <ul className="p-static-entry-meta-tags-list c-tags">
                    <li>
                      <Link to="archive.html">タグ1</Link>
                    </li>
                    <li>
                      <Link to="archive.html">タグ2</Link>
                    </li>
                    <li>
                      <Link to="archive.html">タグ3</Link>
                    </li>
                    <li>
                      <Link to="archive.html">タグ4</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            <div className="p-static-entry-content">
              <section>
                <PageContent className="content" content={content} />
              </section>
            </div>
            <div className="p-static-entry-footer">
              <div className="c-pagenation">ページネーション</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
