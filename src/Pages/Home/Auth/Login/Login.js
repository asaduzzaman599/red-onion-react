import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase.init';
import logo from './../../../../images/logo2.png'

const Login = () => {
    
    const navigate = useNavigate()
    const location = useLocation()
    const [userInfo,setUserInfo] = useState({email:"",password:""})

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);

      console.log(location)
      let from = location?.state?.from?.pathname||'/';

      if(user){
        navigate(from , {replace:true})
      }

      if(hookError){
        switch(hookError) {
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

    

    const handleEmail =(event) =>{
        const value = event.target.value;
            setUserInfo({...userInfo,email:value})
          }
    

    
    const handlePassword =(event) =>{
        const value = event.target.value;
            setUserInfo({...userInfo,password:value})
           
    }

     


    const handleForm = (event) =>{

        event.preventDefault();

        const {email,password} = userInfo;
        

        if( email &&  password ){
            signInWithEmailAndPassword(email,password)
        }

    }

    return (
        <div className='w-full min-h-screen bg-[#FCF4E0] p-10'>
            <div className='md:w-2/5 mx-auto bg-white p-14 flex flex-col items-center gap-4'>
            <h3 className='text-2xl font-bold'>Log in</h3>
            <img src={logo} className="h-16 inline-block "  alt="" />

            <form onSubmit={handleForm} className='flex flex-col gap-10 md:p-8  w-full'>
                
                <div className="input-group">
                    <input type="email" onChange={handleEmail} name="" id="" placeholder='Email' required/>
                </div>
                <div className="input-group">
                    <input type="password" onChange={handlePassword} name="" id="" placeholder='Password' required/>
                </div>
                
                <div className="input-btn ">
                    <input type="submit" className='' value='Log in'/>
                </div>

            </form>
            </div>
        </div>
    );
};

export default Login;