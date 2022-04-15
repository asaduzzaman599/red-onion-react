import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../images/logo2.png'
import './Header.css'
const Header = () => {
    return (
        <div className='flex justify-between  p-4 items-center'>
            <div>
                <Link to='/'>
                    <img src={logo} className='h-6' alt="" />
                </Link>
            </div>
            <div className='sm:flex items-center gap-4'>
                <Link to='/' className='font-semibold block'>Login</Link>
                <Link to='/' className='btn-color text-white font-medium rounded-3xl px-4 py-2 block'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;