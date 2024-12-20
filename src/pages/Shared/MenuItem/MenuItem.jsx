import React from 'react';

const MenuItem = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div className='flex'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[118px] h-[104px]' src={image} alt="" />
            <div className='ml-8 mr-1'>
                <h3 className='uppercase'>{name}------------------</h3>
                <p>{recipe}</p>
            </div>
            <h3 className='text-[#BB8506]'>${price}</h3>
        </div>
    );
};

export default MenuItem;