import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../images/logo2.png'
import './Header.css'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='flex justify-between h-20 p-4 items-center'>
            <div>
                <Link to='/'>
                    <img src={logo} className='h-10' alt="" />
                </Link>
            </div>
            <div className='sm:flex items-center gap-4'>
                {
                    user?
                    <button className='btn-color text-white font-medium rounded-3xl px-4 py-2 block' onClick={()=>signOut(auth)}>Sign out</button>
                    :
                    <><Link to='/login' className='font-semibold block'>Login</Link>
                    <Link to='/signup' className='btn-color text-white font-medium rounded-3xl px-4 py-2 block'>Sign Up</Link></>
                }
            </div>
        </div>
    );
};

export default Header;