import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import MenuImg from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Savory Stories | Menu</title>
            </Helmet>
            <Cover
                img={MenuImg}
                title={"OUR MENU"}
                subTitle={"Would you like to try a dish?"}
            ></Cover>
        </div>
    );
};

export default Menu;