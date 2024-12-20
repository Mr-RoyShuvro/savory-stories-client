import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }

    return (
        <section className='max-w-screen-xl mx-auto pb-32'>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide>
                        <div className='mx-40 flex flex-col items-center gap-5'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                itemStyles={myStyles}
                                readOnly
                            />
                            <h2 className='text-[#444444] text-xl pb-2 pt-10'>{review.details}</h2>
                            <h3 className='text-[#CD9003] text-[32px] font-medium'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;