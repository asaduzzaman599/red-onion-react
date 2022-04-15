import React from 'react';


const Feature = ({feature}) => {
    const {img,featureTitle,icon,description} = feature;
    console.log(img)
    return (
       <div className='w-full' >
           <div className='rounded-3xl hover:shadow-2xl pb-4'>
           <img src={img} alt="" />
           <div className='flex mt-5 gap-5 px-5 mb-5'>
            <img src={icon} className={"w-12 h-12"} alt="" />
            <div>
                <h3>{featureTitle}</h3>
                <p>{description}</p>
                <button className='text-cyan-500 text-xl mt-10 font-semibold'> See more</button>
            </div>
           </div>
           </div>
       </div>
    );
};

export default Feature;