import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderCardCategory = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                items.map(item => <FoodCard item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderCardCategory;