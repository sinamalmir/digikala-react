import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

// import required modules
import { Autoplay, Pagination , Navigation} from "swiper";

// images 
import Slide1 from '../assets/img/slide/slider1.jpeg'
import Slide2 from '../assets/img/slide/slider2.jpeg'
import Slide3 from '../assets/img/slide/slider3.jpeg'
import Slide4 from '../assets/img/slide/slider4.jpeg'
import Slide5 from '../assets/img/slide/slider5.jpeg'
import Slide6 from '../assets/img/slide/slider6.jpeg'

const HeroSlider = () => {
    return (
        <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination ,Navigation]}
        className="mySwiper !h-[268px] lg:!h-[300px] xl:!h-[400px]"
      >

            <SwiperSlide>
                <img src={Slide1} alt="image slider" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide2} alt="image slider2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide3} alt="image slider3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide4} alt="image slider4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide5} alt="image slider5" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide6} alt="image slider6" />
            </SwiperSlide>

        </Swiper>
    );
};

export default HeroSlider;