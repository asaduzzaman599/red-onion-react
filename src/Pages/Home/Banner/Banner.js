import React from 'react';
import banner from './../../../images/bannerbackground.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner flex items-center justify-center flex-col  gap-5'>
            <h2 className='text-4xl'>Best Food Waiting for Your Belly</h2>
        <div className='w-2/6 bg-white rounded-3xl flex justify-between'>
        <input type="text" name="" id="" className='rounded-3xl px-6 py-4  w-full outline-none text-xl' placeholder='Seach Food Items'/>
        <button className=' btn-color py-4 px-8 rounded-3xl font-medium text-white'>Search</button>
        </div>
        </div>
    );
};

export default Banner;