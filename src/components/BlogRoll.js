import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

import Sample from "../img/sample.png";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const page = this.props.pageName;

    return (
      posts &&
      posts.map(({ node: post }) => (
        <article key={post.id}>
          <div className={`p-${page}`}>
            <Link className={`p-${page}-thumb`} to={post.fields.slug}>
              <img
                src={Sample}
                alt={post.frontmatter.title}
                title={post.frontmatter.title}
              />
            </Link>
            <div className={`p-${page}-entry`}>
              <header>
                <h2 className={`p-${page}-entry-title`}>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
              </header>
              <div className={`p-${page}-entry-meta`}>
                <div className={`p-${page}-entry-meta-date`}>
                  {post.frontmatter.date}
                </div>
                <div className={`p-${page}-entry-meta-tags`}>
                  <ul className={`p-${page}-entry-meta-tags-list c-tags`}>
                    <li>
                      <Link to="/blog">タグ1</Link>
                    </li>
                    <li>
                      <Link to="/blog">タグ2</Link>
                    </li>
                    <li>
                      <Link to="/blog">タグ3</Link>
                    </li>
                    <li>
                      <Link to="/blog">タグ4</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`p-${page}-entry-content`}>
                <section>
                  <p>{post.excerpt}</p>
                </section>
              </div>
              <div className="c-like is-active">
                <span>❤</span>
                <i className="c-like-number">1</i>
              </div>
              <div className="c-button">
                <Link to={post.fields.slug}>
                  エントリータイトル...の続きを読む
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))
    );
  }
}

BlogRoll.defaultProps = {
  pageName: `article`
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  pageName: PropTypes.string
};

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  thumbnail {
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <BlogRoll data={data} count={count} {...props} />
      )}
    />
  );
};
