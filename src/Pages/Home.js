import React from 'react';
import Banner from '../components/Banner';
import Digi from '../components/Digi';

// components
import HeroSlider from '../components/HeroSlider';
import SliderPro from '../components/SliderPro';

const Home = () => {
    return (
        <>
          <HeroSlider />
          <Digi />
          <SliderPro />
          <Banner />
        </>
    );
};

export default Home;