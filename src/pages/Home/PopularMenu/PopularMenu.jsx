import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular");
                setMenu(popularItems)
            })
    }, []);

    return (
        <section className='mb-32 max-w-screen-xl mx-auto'>
            <SectionTitle
                subHeading='Check it out'
                heading='FROM OUR MENU'
            >
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    menu.map(item => <MenuItem
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