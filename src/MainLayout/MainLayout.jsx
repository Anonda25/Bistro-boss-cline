import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Sharde/Footer/Footer';
import Navbar from '../pages/Sharde/Navbar/Navbar';
const MainLayout = () => {
    const loaction = useLocation()
    const nonavberfooter = loaction.pathname.includes('login') || loaction.pathname.includes('register')
    return (
        <div>
           {nonavberfooter || <Navbar></Navbar>}
          <div className='max-w'>
                <Outlet></Outlet>
          </div>
        {nonavberfooter ||  <Footer></Footer>}
        </div>
    );
};

export default MainLayout;