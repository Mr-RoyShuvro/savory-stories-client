import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white mb-32 pt-32 pb-32'>
            <div className='featured-bg'></div>
            <div className='featured-content'>
                <div className='max-w-screen-xl mx-auto'>
                    <div className='w-3/4 md:w-4/12 mx-auto text-center pb-10'>
                        <h3 className='text-[#D99904] text-xl pb-4'>---Check it out---</h3>
                        <h1 className='text-white text-[40px] border-t-[#E8E8E8] border-t-4 pt-5 border-b-[#E8E8E8] border-b-4 pb-6 uppercase'>From Our Menu</h1>
                    </div>
                </div>
                <div className='md:flex justify-center items-center gap-16 pt-12 px-72 '>
                    <div>
                        <img className='' src={FeaturedImg} alt="" />
                    </div>
                    <div>
                        <h4>March 20, 2023</h4>
                        <h3 className='uppercase'>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor quibusdam error unde molestiae nihil et consequuntur veniam sapiente, facilis rerum deserunt. Ab quam tenetur aspernatur fugiat magni saepe eos obcaecati, architecto illum quae, magnam provident, nostrum hic doloremque. Eos labore ea facilis quas aspernatur nam explicabo asperiores ab impedit?</p>
                        <button className="btn btn-outline border-0 border-b-[3px] border-white text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;