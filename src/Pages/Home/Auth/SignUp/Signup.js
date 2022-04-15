import React from 'react';
import logo from './../../../../images/logo.png'
import './../Form.css'
const Signup = () => {
    return (
        <div className='w-full min-h-screen bg-[#FCF4E0] p-10'>
            <div className='md:w-2/5 mx-auto bg-white p-14 flex flex-col items-center gap-10'>
            <h3>signup</h3>
            <img src={logo} className="h-16 inline-block  ml-14"  alt="" />

            <form className='flex flex-col gap-10 p-8 w-full'>
                <div className="input-group">
                    <input type="text" className=' w-full' name="" id="" placeholder='Name' required/>
                </div>
                <div className="input-group">
                    <input type="email" name="" id="" placeholder='Email' required/>
                </div>
                <div className="input-group">
                    <input type="password" name="" id="" placeholder='Password' required/>
                </div>
                <div className="input-group">
                    <input type="password" name="" id="" placeholder='Confirm Password' required/>
                </div>
                <div className="input-btn ">
                    <input type="submit" className='' value='Sign in'/>
                </div>

            </form>
            </div>
        </div>
    );
};

export default Signup;