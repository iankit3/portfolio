import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const blogs = props.data.blogs.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="We are a corporate consulting firm that collaborates to craft corporate wisdom."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>Ankit <br /> Kumar</h1>
          <p>
          I am a Software Developer from Bangalore India, having more than 2 years of professional experience. I love Web Development feel passionate about it and always try to keep myself moving with the same pace Web is growing (and everytime i fail badly).

          Most of my Development experience revolve around Web Applications but i like web scrapping and text parsing. In my free time i always try to learn new things , get inspired by them and implement those principles in existing applications .
          
          When i am not working i will be found either on a Cricket ground or somewhere admiring my city.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/showcase/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    blogs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}, frontmatter: {}}) {
      edges {
        node {
          id
          frontmatter{
            title
            author
          }
        }
      }
    }
  }
`;

export default Home;
