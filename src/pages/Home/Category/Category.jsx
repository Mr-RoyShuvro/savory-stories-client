import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/element/css/autoplay';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            slidesPerView={5}
            spaceBetween={24}
            centeredSlides={false}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className='text-3xl text-center uppercase -mt-16 mb-20 text-white'>Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className='text-3xl text-center uppercase -mt-16 mb-20 text-white'>Pizzas</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className='text-3xl text-center uppercase -mt-16 mb-20 text-white'>Soups</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className='text-3xl text-center uppercase -mt-16 mb-20 text-white'>Desserts</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className='text-3xl text-center uppercase -mt-16 mb-20 text-white'>Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className='text-3xl text-center uppercase -mt-16 mb-20 text-white'>Pizzas</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className='text-3xl text-center uppercase -mt-16 mb-20 text-white'>Soups</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className='text-3xl text-center uppercase -mt-16 mb-20 text-white'>Desserts</h3>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;
