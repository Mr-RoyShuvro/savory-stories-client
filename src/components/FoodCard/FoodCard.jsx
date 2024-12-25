import React from 'react';
import BtnSecondary from '../BtnSecondary/BtnSecondary';

const FoodCard = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img
                    className='w-full'
                    src={image}
                    alt="Food Card" />
            </figure>
            <p className='absolute right-0 mr-5 mt-5 px-6 py-3 bg-[#111827] text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-[#151515] text-2xl font-semibold">{name}</h2>
                <p className='text-[#737373] text-base font-normal leading-[26px]'>{recipe}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Add to Cart</button> */}
                    <BtnSecondary btnSecondaryText="Add to cart"></BtnSecondary>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;