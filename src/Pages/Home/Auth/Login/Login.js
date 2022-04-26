import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../firebase.init';
import logo from './../../../../images/logo2.png'

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location?.state?.from?.pathname || '/';


    if (user) {
        // navigate(from, { replace: true })
    }

    useEffect(() => {
        if (hookError) {
            switch (hookError.message) {
                case 'Firebase: Error (auth/user-not-found).':
                    toast.error('User not found')
                    break;

                default:

                    toast.error('Something went wrong')
            }
        }
    }, [hookError])



    const handleEmail = (event) => {
        const value = event.target.value;
        setUserInfo({ ...userInfo, email: value })

    }



    const handlePassword = (event) => {
        const value = event.target.value;
        setUserInfo({ ...userInfo, password: value })

    }




    const handleForm = (event) => {

        event.preventDefault();

        const { email, password } = userInfo;


        if (email && password) {
            const signIn = async () => {
                await signInWithEmailAndPassword(email, password)
                console.log(user.user)
                const { data } = await axios.post('http://localhost:4000/login', { email: user?.user?.email })
                console.log(data)
                localStorage.setItem('accessToken', data)
            }
            signIn()
        }

    }

    return (
        <div className='w-full min-h-screen bg-[#FCF4E0] p-10'>
            <div className='md:w-2/5 mx-auto bg-white p-14 flex flex-col items-center gap-4'>
                <h3 className='text-2xl font-bold'>Log in</h3>
                <img src={logo} className="h-16 inline-block " alt="" />

                <form onSubmit={handleForm} className='flex flex-col gap-10 md:px-8 pt-4 w-full'>

                    <div className="input-group">
                        <input type="email" onChange={handleEmail} name="" id="" placeholder='Email' required />
                    </div>
                    <div className="input-group">
                        <input type="password" onChange={handlePassword} name="" id="" placeholder='Password' required />
                    </div>

                    <div className="input-btn ">
                        <input type="submit" className='' value='Log in' />
                    </div>

                </form>

                <Link to='/signup' className='text-[#E51A4B] font-medium'>Don't have account?</Link>
            </div>
        </div>
    );
};

export default Login;