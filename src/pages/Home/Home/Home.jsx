import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <h3 className='text-3xl text-sky-500'>This is Home</h3>
        </div>
    );
};

export default Home;