import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white pt-32 pb-32 mb-32'>
            <div className='max-w-screen-xl mx-auto'>
                <SectionTitle
                    subHeading="Check it out"
                    heading="From Our Menu"
                ></SectionTitle>
            </div>
            <div className='md:flex justify-center items-center gap-16 pt-12 px-72'>
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div>
                    <h4>March 20, 2023</h4>
                    <h3 className='uppercase'>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor quibusdam error unde molestiae nihil et consequuntur veniam sapiente, facilis rerum deserunt. Ab quam tenetur aspernatur fugiat magni saepe eos obcaecati, architecto illum quae, magnam provident, nostrum hic doloremque. Eos labore ea facilis quas aspernatur nam explicabo asperiores ab impedit?</p>
                    <button className="btn btn-outline btn-primary">Primary</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;