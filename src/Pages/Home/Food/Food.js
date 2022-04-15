import React from 'react';

const Food = ({food}) => {
    const {name,img,description,price}= food;
    console.log(img)
    return (
        <div className='flex flex-col items-center p-6 gap-4 hover:shadow-2xl rounded'>
            <img src={img} className='w-2/4 mx-auto' alt="" />
            <h3 className='text-xl font-sm'>{name}</h3>
            <p className=''>{description}</p>
            <p className='text-xl font-mon'>${price}</p>
            
        </div>
    );
};

export default Food;