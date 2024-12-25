import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import BtnPrimary from '../../../components/BtnPrimary/BtnPrimary';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
    return (
        <div className='mb-12'>
            {/* Cover */}
            {title && <Cover img={coverImg} title={title} subTitle={subTitle} ></Cover>}

            {/* Category */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto mt-32 mb-6'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <BtnPrimary btnPrimaryText="ORDER YOUR FAVOURITE FOOD"></BtnPrimary>
            </Link>
        </div>
    );
};

export default MenuCategory;