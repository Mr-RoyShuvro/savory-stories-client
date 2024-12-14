import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

const Banner = () => {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <>
            <Carousel
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showThumbs={true}
                renderThumbs={() => images.map((img, index) => (
                    <img key={index} src={img} alt={`Thumbnail ${index + 1}`} />
                ))}
            >
                {images.map((img, index) => (
                    <div key={index}>
                        <img  src={img} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
            <style>
                {`
                    .carousel .thumbs-wrapper {
                        display: flex;
                        justify-content: center;
                        width: 100%;
                    } 
                `}
            </style>
        </>
    );
};

export default Banner;
