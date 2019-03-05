import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Sample from "../img/sample.png";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main
}) => (
  <main>
    <div className="l-container">
      <div className="l-articles">
        <Features gridItems={intro.blurbs} />
        <BlogRoll />
        <article>
          <div className="p-article">
            <Link className="p-article-thumb" to="/blog">
              <img
                src={Sample}
                alt="エントリータイトル"
                title="エントリータイトル"
              />
            </Link>
            <div className="p-article-entry">
              <header>
                <h2 className="p-article-entry-title">
                  <Link to="/blog">
                    エントリータイトルエントリータイトルエントリータイトルエントリータイトルエントリータイトルエントリータイトルエントリータイトル
                  </Link>
                </h2>
                <div className="p-article-entry-meta">
                  <div className="p-article-entry-meta-date">YYYY/MM/DD</div>
                  <div className="p-article-entry-meta-tags">
                    <ul className="p-single-entry-meta-tags-list c-tags">
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
              </header>
              <div className="p-article-entry-content">
                <section>
                  <p>
                    mainタグはbodyタグ内の中心的なコンテンツであることを示すタグです。これまでにmainクラスをdivタグに付けていた部分がmainタグを使う部分だと考えれば大丈夫です。上に挙げた図ではasideタグも含めていますが、asideタグ内のコンテンツが他のページでも全く同じであればmainタグで囲む内容からは除外しておいた方がいいでしょう。
                  </p>
                </section>
              </div>
              <div className="c-like is-active">
                <span>❤</span>
                <i className="c-like-number">1</i>
              </div>
              <div className="c-button">
                <Link to="/blog">エントリータイトル...の続きを読む</Link>
              </div>
            </div>
          </div>
        </article>
        <article>
          <div className="p-article">
            <Link className="p-article-thumb" to="/blog">
              <img
                src={Sample}
                alt="エントリータイトル"
                title="エントリータイトル"
              />
            </Link>
            <div className="p-article-entry">
              <header>
                <h2 className="p-article-entry-title">
                  <Link to="/blog">エントリータイトルエントリータイトル</Link>
                </h2>
                <div className="p-article-entry-meta">
                  <div className="p-article-entry-meta-date">YYYY/MM/DD</div>
                  <div className="p-article-entry-meta-tags">
                    <ul className="p-single-entry-meta-tags-list c-tags">
                      <li>
                        <Link to="/blog">タグ1</Link>
                      </li>
                      <li>
                        <Link to="/blog">タグ2</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
              <div className="p-article-entry-content">
                <section>
                  <p>
                    mainタグはbodyタグ内の中心的なコンテンツであることを示すタグです。これまでにmainクラスをdivタグに付けていた部分がmainタグを使う部分だと考えれば大丈夫です。上に挙げた図ではasideタグも含めていますが、asideタグ内のコンテンツが他のページでも全く同じであればmainタグで囲む内容からは除外しておいた方がいいでしょう。
                  </p>
                </section>
              </div>
              <div className="c-like is-disabled">
                <span>❤</span>
                <i className="c-like-number">100</i>
              </div>
              <div className="c-button">
                <Link to="/blog">エントリータイトル...の続きを読む</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout isFront="true">
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
