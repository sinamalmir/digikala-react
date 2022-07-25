import React from 'react';

// images
import Banner from '../../assets/img/topBanner.gif'
import Logo from '../../assets/img/logo.svg';

const HeaderDesktop = () => {
    return (
        <div className='hidden lg:block' >
            <div className='header-wrapper shadow-md pb-1'>
                <div className='w-full'>
                    <img src={Banner} alt="top-banner" />
                </div>

                <div className='flex items-center justify-between p-3' >
                    <div className='flex items-center '>
                        <img src={Logo} alt="" />
                        <div className='relative mr-5'>
                            <label htmlFor="search" className='absolute top-3 z-10 right-2 text-[#A0A3A7]'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </label>
                            <input type="srarch" placeholder='جستجو' className='bg-[#F0F0F1] p-4 rounded-lg relative pr-10 text-sm w-[400px]' />
                        </div>
                    </div>

                    <div className='flex items-center justify-end'>
                        <div className='flex items-center border p-2  text-sm rounded-lg ml-8 cursor-pointer'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                            </span>
                            <span> ورود | ثبت نام </span>
                        </div>
                        <span className='ml-2 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                    </div>

                </div>

                <div className='flex items-center justify-between' >
                    <div className='flex items-center '>
                        <ul className='flex items-center text-sm text-[#62666C] '>
                            <li className=' p-1 ml-3 font-bold text-black flex items-center'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </span>
                                <span> دسته بندی کالاها </span>
                            </li>
                            <li className=' p-1 ml-3 flex items-center'>
                                <span>
        
                                </span>
                                <span> سوپرمارکت </span>
                            </li>
                            <li className=' p-1 ml-3 flex items-center'>
                                <span>
        
                                </span>
                                <span> پرفروش ترین ها </span>
                            </li>
                            <li className=' p-1 ml-3 flex items-center'>
                                <span>
        
                                </span>
                                <span> تخفیف ها و پیشنهادات </span>
                            </li>
                            <li className=' p-1 ml-3 flex items-center'>
                                <span>
        
                                </span>
                                <span> شگفت انگیزها </span>
                            </li>
                            <li className=' p-1 ml-3 flex items-center'>
                                <span> سوالی دارید؟ </span>
                            </li>
                            <li className=' p-1 ml-3 flex items-center'>
                                <span> فروشنده شوید! </span>
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center justify-end' >
                        <span >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        <span className='text-xs font-normal ml-5 mr-2'> لطفا شهر خود را انتخاب کنید </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;