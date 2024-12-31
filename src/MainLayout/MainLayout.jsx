import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sharde/Footer/Footer';
import Navbar from '../pages/Sharde/Navbar/navbar';
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
          <div className='max-w'>
                <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;