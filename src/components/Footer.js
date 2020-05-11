import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background: red;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = props => (
  <StyledFooter>
      <h3 className="footer-title">{props.data.site.siteMetadata.title}</h3>
      <div className="footer-menu">
        <div>
          {' '}
          <Link to="/">Home</Link>
        </div>
        <div>
          {' '}
          <Link to="/contact">Contact</Link>
        </div>
        <div className="copyright">
          © 
{' '}
{new Date().getFullYear()} 
{' '}
{props.data.site.siteMetadata.title}
        </div>
      </div>
  </StyledFooter>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
