import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
    return (
        <div>
            {/* Cover */}
            {title && <Cover img={coverImg} title={title} subTitle={subTitle} ></Cover>}

            {/* Category */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;