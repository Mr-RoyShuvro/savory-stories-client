import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderCardCategory from '../OrderCardCategory/OrderCardCategory';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex, category)


    const [tabindex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Savory Stories | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title="Order Food" subTitle="Would you like to try a dish?"></Cover>

            <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center pt-20 pb-20'>
                <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
                    <div className='flex flex-col justify-center items-center text-[#BB8506] text-2xl font-semibold pb-10'>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <OrderCardCategory items={salad}></OrderCardCategory>
                    </TabPanel>
                    <TabPanel>
                        <OrderCardCategory items={pizza}></OrderCardCategory>
                    </TabPanel>
                    <TabPanel>
                        <OrderCardCategory items={soup}></OrderCardCategory>
                    </TabPanel>
                    <TabPanel>
                        <OrderCardCategory items={dessert}></OrderCardCategory>
                    </TabPanel>
                    <TabPanel>
                        <OrderCardCategory items={drinks}></OrderCardCategory>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;