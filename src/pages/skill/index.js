import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Skill = (props) => {
  const skill = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-skill">
      <SEO title="Skill" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>My Skills</h1>
              <p>
              javaScript, Java, Nodejs, ReactJs, Angular.js, Angular2, Redux, j2EE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {skill.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="Skill card-two">
                <div className="card-header">
                  <div className="card-header-left">
                    {edge.node.frontmatter.image && (
                      <div className="card-image">
                        <img
                          alt={edge.node.frontmatter.title}
                          className="img-fluid mb-2"
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-right">
                    <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                    <ul className="card-meta">
                      <li>
                        <strong>{edge.node.frontmatter.rating}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="Skill-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query skillQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/skill/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            rating
          }
        }
      }
    }
  }
`;

export default Skill;
