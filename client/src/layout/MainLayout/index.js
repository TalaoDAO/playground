import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from "../../components/common/ScrollToTop";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header/>
      <div className='content-container'>
        <ScrollToTop/>
        {children}
      </div>
      <Footer />
    </div>
  )
};

export default MainLayout;
