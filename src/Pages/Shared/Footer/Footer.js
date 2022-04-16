import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../images/logo.png'
const Footer = () => {
    const options = ['About Online Food', "Raad Our Blog", "Sign up to delivery", "Add your resturent"]
    const customerServices = ['Get Help', "Raad FAQ", "View all cites", "Resturents near me"]
    const year = (new Date()).getFullYear()
    return (
        <footer className='bg-stone-900  py-14 p-6'>
            <div className='container mx-auto md:text-left '>
                <div className='  md:grid md:grid-cols-5 w-full'>
                    <div className='md:col-span-3  '>
                        <Link to="/">
                            <img src={logo} className="h-10 mx-auto md:mx-0" alt="" />
                        </Link>
                    </div>
                    <div className='mt-4 md:mt-0'>
                        <ul cl>
                            {
                                options.map((option, index) => <li key={index}><Link className='text-gray-100' to='/'>{option}</Link></li>)
                            }
                        </ul>
                    </div><div className=''>
                        <ul>
                            {
                                customerServices.map((services, index) => <li key={index}><Link  className='text-gray-100' to='/'>{services}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='flex justify-around text-gray-400  mt-10'>
                <p className='text-left'>copyright &copy; {year}</p>
                <div className='flex gap-10'>
                            
                <p>Private policy</p>
                <p>Term of use</p>
                <p>Pricing</p>
                </div>
                </div>

            </div>
            
        </footer>
    );
};

export default Footer;