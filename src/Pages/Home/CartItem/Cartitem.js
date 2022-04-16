import React, { useState } from 'react';

const Cartitem = ({cartItem}) => {
    const {img,name,price,count:cartCount} = cartItem
    const [count,setCount]=useState(cartCount)
   
    return (
        <div className='flex items-center justify-between bg-[#f2f1f1] p-2 px-4 my-2 border'>
            <div className='flex items-center gap-8'>
            <div className=''>
                <img src={img} className='w-full h-24' alt="" />
            </div>
            <div className=''>
                <p>{name}</p>
                <p className='text-[#E51A4B]'>${price}</p>
            </div>
            <div>
            <div className='rounded-3xl flex items-center gap-5 text-2xl border px-6'>
                    <button onClick={()=>setCount(count+1)}>+</button>
                    {count}
                    <button  onClick={()=>count>0?setCount(count-1):''}>-</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Cartitem;