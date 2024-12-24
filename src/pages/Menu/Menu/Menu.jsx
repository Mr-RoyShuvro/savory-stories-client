import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import MenuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

import dessertsImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladsImg from '../../../assets/menu/salad-bg.jpg'
import soupsImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

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
            <div className='pt-20 max-w-screen-xl mx-auto'>
                <SectionTitle
                    subHeading="Don't miss"
                    heading="TODAY'S OFFER">
                </SectionTitle>
            </div>

            {/* Offered item */}
            <MenuCategory items={offered}></MenuCategory>

            {/* Desserts */}
            <MenuCategory items={dessert} coverImg={dessertsImg} title={"dessert"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

            {/* Pizza */}
            <MenuCategory items={pizza} coverImg={pizzaImg} title={"pizza"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

            {/* Salads */}
            <MenuCategory items={salad} coverImg={saladsImg} title={"salad"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

            {/* Soups */}
            <MenuCategory items={soup} coverImg={soupsImg} title={"soup"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
    );
};

export default Menu;