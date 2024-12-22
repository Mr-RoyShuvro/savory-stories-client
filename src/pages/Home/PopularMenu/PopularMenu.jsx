import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-32 max-w-screen-xl mx-auto'>
            <SectionTitle
                subHeading='Check it out'
                heading='FROM OUR MENU'
            >
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-[3px] border-black text-black">Read More</button>
        </section>
    );
};

export default PopularMenu;