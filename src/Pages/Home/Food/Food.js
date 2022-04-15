import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../Home';

const Food = ({food}) => {
    const {id,name,img,description,price,category}= food;
    const navigate = useNavigate()
    const [item,setItems] = useContext(ItemContext)
    const handleFood =()=>{
        setItems('')
        navigate(`foods/${category}/${id}`)
    }
    return (
        <div onClick={handleFood} className='flex flex-col items-center p-6 gap-4 hover:shadow-2xl rounded'>
            <img src={img} className='w-2/4 mx-auto' alt="" />
            <h3 className='text-xl font-medium'>{name}</h3>
            <p className=''>{description}</p>
            <p className='text-xl font-mono'>${price}</p>
            
        </div>
    );
};

export default Food;