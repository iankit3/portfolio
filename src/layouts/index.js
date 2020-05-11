import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/style.css';

const StyledLayout = styled.div`
  margin: 0;
  padding: 0;
`;

const Layout = props => (
  <StyledLayout>
    <SEO />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <Header />
      <div id="wrapper" className="wrapper">
        {props.children}
      </div>
      <Footer />
    </div>
  </StyledLayout>
);

export default Layout;
