import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import banner from './../../../images/bannerbackground.png'
import './Banner.css'
const Banner = ({ searchFood }) => {
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        const searchText = event.target.search.value;
        if (searchText) {
            await searchFood(searchText)
            event.target.search.value = ''
            navigate('/seach')
        }

    }
    return (
        <div className='banner flex items-center justify-center flex-col  gap-5'>
            <h2 className='sm:text-4xl text-2xl' >Best Food Waiting for Your Belly</h2>
            <form onSubmit={handleSubmit} className='sm:w-2/6 w-4/5 bg-white rounded-3xl flex justify-between'>
                <input type="text" name="search" id="" className='rounded-3xl px-6 py-3  w-full outline-none text-xl' placeholder='Seach Food Items' />
                <button className=' btn-color py-2 px-10 rounded-3xl font-medium text-white' >Search</button>
            </form>
        </div>
    );
};

export default Banner;