import { async } from '@firebase/util';
import React, { useState } from 'react';
import { auth } from '../../../../firebase.init';
import logo from './../../../../images/logo2.png'
import './../Form.css'
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import image1 from './../../../../images/icons/Group 743.png'
import image2 from './../../../../images/icons/Group 287.png'
import image3 from './../../../../images/icons/Group 747.png'
import image4 from './../../../../images/icons/Group 761.png'
import image5 from './../../../../images/icons/Group 767.png'
import image6 from './../../../../images/icons/Group 765.png'

const Signup = () => {

    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "", confirmPassword: '' })
    const [error, setError] = useState({ nameError: "", emailError: "", passwordError: "", confirmPasswordError: '', other: '' })

    const [
        createUserWithEmailAndPassword,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [user] = useAuthState(auth)

    if (user) {
        navigate('/')
    }

    if (hookError) {
        switch (hookError) {
            case '':
                // code block
                break;
            case '':
                // code block
                break;
            default:
            // code block
        }
    }

    const handleName = (event) => {
        const value = event.target.value;
        if (value) {
            setUserInfo({ ...userInfo, name: value })
            setError({ ...error, nameError: '' })
            console.log(value)
        } else {

            setError({ ...error, nameError: 'Name is empty' })
            console.log('error')
        }
    }

    const handleEmail = (event) => {
        const value = event.target.value;
        if ((/\S+@\S+\.\S+/).test(value)) {
            setUserInfo({ ...userInfo, email: value })
            setError({ ...error, emailError: '' })
        } else {

            setError({ ...error, emailError: 'invalied email' })
            console.log('error')
        }
    }


    const handlePassword = (event) => {
        const value = event.target.value;
        if ((/.{8,30}/).test(value)) {
            setUserInfo({ ...userInfo, password: value })
            setError({ ...error, passwordError: '' })
        } else {

            setError({ ...error, passwordError: 'Minimum 8 length password' })
            console.log('error')
        }
    }


    const handlecConfirmPassword = (event) => {
        const value = event.target.value;
        if (value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: value })
            setError({ ...error, confirmPasswordError: '' })
        } else {

            setError({ ...error, confirmPasswordError: 'Not Match' })
            console.log('error')
        }

    }


    const handleForm = (event) => {

        event.preventDefault();

        const { name, email, password, confirmPassword } = userInfo;
        const username = event.target.username.value;
        if (!name) {
            setError({ ...error, nameError: 'Name is empty' })

            return
        }

        if (!(/\S+@\S+\.\S+/).test(email)) {


            setError({ ...error, emailError: 'invalied email' })
            return
        }

        if (!password > 7) {

            setError({ ...error, passwordError: 'Minimum 8 length password' })
            return
        }
        if (!confirmPassword === password) {

            setError({ ...error, confirmPasswordError: 'Not Match' })
            return

        }

        if (name && email && password && confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        }

    }

    return (
        <div className='w-full min-h-screen bg-[#FCF4E0] p-10 py-15 relative'>
            <div className='md:w-2/5 w-full mx-auto bg-white p-14 flex flex-col items-center gap-4 z-10'>
                <h3 className='text-2xl font-bold'>Sign up</h3>
                <img src={logo} className="h-16 inline-block  " alt="" />

                <form onSubmit={handleForm} className='flex flex-col gap-10 md:p-8  w-full'>
                    <div className="input-group">
                        <input type="text" className=' w-full' name="username" id="" placeholder='Name' onChange={handleName} />
                        {error?.nameError && <p className='text-red-500 text-left'>{error?.nameError}</p>}
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" id="" placeholder='Email' onChange={handleEmail} required />
                        {error?.emailError && <p className='text-red-500 text-left'>{error?.emailError}</p>}
                    </div>
                    <div className="input-group">
                        <input type="password" name="password" id="" placeholder='Password' onChange={handlePassword} required />
                        {error?.passwordError && <p className='text-red-500 text-left'>{error?.passwordError}</p>}
                    </div>
                    <div className="input-group">
                        <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' onChange={handlecConfirmPassword} required />
                        {error?.confirmPasswordError && <p className='text-red-500 text-left'>{error?.confirmPasswordError}</p>}
                    </div>
                    <div className="input-btn ">
                        <input type="submit" className='' value='Sign in' />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default Signup;