import React from 'react';

// images
import icon1 from '../assets/img/icon1.png';
import txt1 from '../assets/img/txt1.svg';
import pro1 from '../assets/img/product/pro1.jpeg'
import pro2 from '../assets/img/product/pro2.jpeg'
import pro3 from '../assets/img/product/pro3.jpeg'
import banner1 from '../assets/img/banner1.jpeg';
import banner2 from '../assets/img/banner2.jpeg';
import banner3 from '../assets/img/banner3.jpeg';
import banner4 from '../assets/img/banner4.jpeg';

const Banner = () => {
    return (
        <div className='p-3'>
            <div className='bg-[#ECEFED] rounded-md p-5 mb-8'>
                <div className=' custom-class items-center justify-between'>
                    <div className='flex items-center '>
                        <img src={icon1} alt="" />
                        <img src={txt1} alt="" className='w-[200px] lg:w-max' />
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src={pro2} alt="" className='w-14 h-14  lg:w-20 lg:h-20 ml-1 lg:ml-3 rounded-full '  />
                        <img src={pro1} alt="" className='w-14 h-14  lg:w-20 lg:h-20 ml-1 lg:ml-3 rounded-full '  />
                        <img src={pro3} alt="" className='w-14 h-14  lg:w-20 lg:h-20 ml-1 lg:ml-3 rounded-full '  />
                        <div className='flex items-center text-sm lg:text-lg text-green-600 p-2 lg:p-4 mr-1 lg:mr-4 bg-white rounded-3xl'>
                            <span className='md:block hidden'> بیش از ۹۰ کالا </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='custom-class items-center justify-between mb-10'>
                    <div className='flex items-center justify-around  custom-class2 mb-2'>
                        <img src={banner1} alt="" className='w-[140px] sm:w-[300px] md:w-[350px] lg:w-[240px] rounded-lg ' />
                        <img src={banner2} alt="" className='w-[140px] sm:w-[300px] md:w-[350px] lg:w-[240px] rounded-lg ' />
                    </div>
                    <div className='flex items-center justify-around custom-class2'>
                        <img src={banner1} alt="" className='w-[140px] sm:w-[300px] md:w-[350px] lg:w-[240px] rounded-lg ' />
                        <img src={banner2} alt="" className='w-[140px] sm:w-[300px] md:w-[350px] lg:w-[240px] rounded-lg ' />
                    </div>
                </div> */}

            <div className='custom-class '>
               <div className='flex items-center justify-between mb-2 lg:mb-0' >
                <div>
                    <img src={banner1} alt="" className='rounded-lg !ml-2' />                   
                </div>
                <div>
                        <img src={banner2} alt="" className='rounded-lg !ml-2' />
                </div>
               </div>
               <div className='flex items-center justify-between'>
                <div>
                        <img src={banner3} alt="" className='rounded-lg !ml-2' />
                    </div>
                    <div>
                        <img src={banner4} alt="" className='rounded-lg !ml-2' />
                    </div>
               </div>
            </div>


        </div>
    );
};

export default Banner;