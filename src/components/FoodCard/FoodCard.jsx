import React from 'react';
import BtnSecondary from '../BtnSecondary/BtnSecondary';

const FoodCard = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="card bg-[#F3F3F3] shadow-lg rounded-none">
            <figure>
                <img
                    className='w-full'
                    src={image}
                    alt="Food Card" />
            </figure>
            <p className='absolute right-0 mr-5 mt-5 px-6 py-3 bg-[#111827] text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-[#151515] text-2xl font-semibold pb-2 pt-8">{name}</h2>
                <p className='text-[#737373] text-base font-normal leading-[26px] pb-6'>{recipe}</p>
                <div className="card-actions justify-end pb-8">
                    <BtnSecondary btnSecondaryText="Add to cart"></BtnSecondary>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;