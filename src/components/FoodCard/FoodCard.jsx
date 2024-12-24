import React from 'react';

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
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;