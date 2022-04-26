import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../Home';

const FoodDetail = () => {
    const { category, foodId } = useParams()
    const [food, setFood] = useState(null);
    const [cart, setCart] = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() => {
        const url = `http://localhost:4000/food?type=${category}&id=${foodId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data))

    }, [category, foodId]);

    const { name, description, price, img } = food || ''

    const [count, setCount] = useState(0)

    const addToCart = () => {
        if (count < 1) {
            return
        }
        const exist = cart.find(cartFood => cartFood.category === food.category && cartFood._id === food._id)

        if (exist) {
            exist.count = exist.count + count;
            const remain = cart.filter(cartFood => cartFood.category !== exist.category || cartFood._id !== food._id)
            setCart([...remain, exist])
        } else {
            food.count = count;
            setCart([...cart, food])
        }

        navigate('/delivarydetails')


    }


    return (
        <div className='container mx-auto flex flex-col md:flex-row items-center min-h-screen p-10'>
            <div className='grow md:order-2'>
                <img className='w-4/6 mx-auto ' src={img} alt="" />
            </div>
            <div className='text-left py-10 flex flex-col gap-6 items-start grow md:order-1'>
                <h5 className='text-5xl font-semibold'>{name}</h5>
                <p>{description}</p>
                <div className='flex gap-10'>
                    <h4 className='text-4xl font-mono'>${price}</h4>
                    <div className='rounded-3xl flex items-center gap-5 text-2xl border px-6'>
                        <button onClick={() => setCount(count + 1)}>+</button>
                        {count}
                        <button onClick={() => count > 0 ? setCount(count - 1) : ''}>-</button>
                    </div>
                </div>
                <button onClick={addToCart} className='btn-color text-white font-medium rounded-3xl px-4 py-2 block'>Add</button>
            </div>

        </div>
    );
};

export default FoodDetail;