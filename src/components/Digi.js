import React from 'react';
import '../index.css';

// images
import digipay from '../assets/img/digiService/digipay.png';
import digimehr from '../assets/img/digiService/digimehr.png';
import digiplus from '../assets/img/digiService/digiplus.png';
import haraj from '../assets/img/digiService/haraj.png';
import jet from '../assets/img/digiService/jet.png';
import mamoriat from '../assets/img/digiService/mamoriat.png';
import surprise from '../assets/img/digiService/surprise.png';

const Digi = () => {
    return (
        <div className='custom-class items-center justify-around mt-5 mb-5'>

            <div className='flex items-center justify-around w-full'>
                <div className='flex-col !items-center !justify-center mb-2 text-center'>
                    <img src={jet} alt="" className='w-16 h-16 mb-1' />
                    <span className='text-xs'> دیجیکالا جت  </span>
                </div>
                <div className='flex-col !items-center !justify-center mb-2 text-center'>
                    <img src={haraj} alt="" className='w-16 h-16 mb-1' />
                    <span className='text-xs'> حراج لباس کودک </span>
                </div>
                <div className='flex-col !items-center !justify-center mb-2 text-center'>
                    <img src={digipay} alt="" className='w-16 h-16 mb-1' />
                    <span className='text-xs'> دیجی پی </span>
                </div>
                <div className='flex-col !items-center !justify-center mb-2 text-center'>
                    <img src={digimehr} alt="" className='w-16 h-16 mb-1' />
                    <span className='text-xs'> دیجیکالا مهر  </span>
                </div>
            </div>

            <div className='flex items-center justify-around w-full'>
                <div className='flex-col !items-center !justify-center mb-2 text-center'>
                    <img src={surprise} alt="" className='w-16 h-16 mb-1' />
                    <span className='text-xs'> سورپرایز </span>
                </div>
                <div className='flex-col !items-center !justify-center mb-2 text-center'>
                    <img src={mamoriat} alt="" className='w-16 h-16 mb-1' />
                    <span className='text-xs'> ماموریت ها </span>
                </div>
                <div className='flex-col !items-center !justify-center mb-2 text-center'>
                    <img src={digiplus} alt="" className='w-16 h-16 mb-1' />
                    <span className='text-xs'> دیجی پلاس </span>
                </div>
                <div className='flex-col !items-center !justify-center mb-2 text-center'>
                    <img src={jet} alt="" className='w-16 h-16 mb-1' />
                    <span className='text-xs'> بیشتر </span>
                </div>
            </div>
        </div>
    );
};

export default Digi;