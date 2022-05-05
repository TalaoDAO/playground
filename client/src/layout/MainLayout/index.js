import React from 'react';
import Header from '../../parts/Header';
import Footer from '../../parts/Footer';
import ScrollToTop from '../../components/common/ScrollToTop';

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
