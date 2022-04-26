import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../Home';

const Food = ({ food }) => {
    const { _id, name, img, description, price, category } = food;
    const navigate = useNavigate()
    const [item, setItems] = useContext(ItemContext)
    const handleFood = () => {
        setItems('')
        navigate(`foods/${category}/${_id}`)
    }
    return (
        <div onClick={handleFood} className='flex flex-col items-center justify-between p-8 gap-4 hover:shadow-2xl rounded'>
            <img src={img} className='w-2/4 mx-auto' alt="" />
            <h3 className='text-xl font-medium'>{name}</h3>
            <p className=''>{description}</p>
            <p className='text-xl font-mono'>${price}</p>

            <button className='text-[#E51A4B] font-semibold' onClick={handleFood}>Add to Cart</button>

        </div>
    );
};

export default Food;