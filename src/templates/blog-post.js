import React from "react";
import AddLilliansColoring from "../components/AddLilliansColoring";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import buttonOnward from "./Bee_hummingbird_no.png";
import styled from "styled-components";

const GiraffeWrapper = styled.div`
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
  padding-top: 0;
  img {
    margin-top: 0;
    padding-top: 0;
  }
`;

class BlogPostTemplate extends React.Component {
  state = {
    coloringPages: {}
  };
  addColoringPages = toyAnimal => {
    // I. Take a copy of existing state
    const coloringPages = { ...this.state.coloringPages };
    // II. add our new coloringPage to that coloringPages ...
    coloringPages[`coloringPage${Date.now()}`] = toyAnimal;
    // III. set the new coloringPages object to state
    this.setState({ coloringPages });
    console.log("adddd");
  };
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GiraffeWrapper>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <SEO title={post.frontmatter.title} description={post.excerpt} />

          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1)
            }}
          />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              paddingLeft: 13,
              marginLeft: 1,
              padding: 0,
              margin: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <img
                    style={{
                      width: "133px"
                    }}
                    src={buttonOnward}
                    alt="button Onward!"
                  />
                </Link>
              )}
            </li>
          </ul>

          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
        </GiraffeWrapper>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
