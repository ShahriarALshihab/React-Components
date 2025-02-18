/* eslint-disable no-undef */

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
// Uncomment if you need navigation buttons
// import { Navigation } from "swiper/modules"; 

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import "swiper/css/navigation"; // Uncomment if using Navigation

import image1 from "./Images/1 (1).jpg"; 
import image2 from "./Images/2 (1).jpg"; 
import image3 from "./Images/3 (1).jpg";
import image4 from "./Images/4 (2).jpg";
import image5 from "./Images/5 (1).jpg"; 

import "./carouselStyle.css"; 

const slides = [
  { title: "1 Series", image: image1 },
  { title: "2 Series", image: image2 },
  { title: "3 Series", image: image3 },
  { title: "4 Series", image: image4 },
  { title: "5 Series", image: image5 },
];

const Carousel = () => {
  return (
    <div className="page carousel-1-page">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]} // Add Navigation if needed
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} 
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px", // Adjust height as needed
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <a href="#">Explore</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
