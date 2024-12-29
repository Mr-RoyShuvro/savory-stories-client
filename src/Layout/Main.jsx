import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {

    const location = useLocation();
    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div className='bg-white'>
            {noNavbarFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;