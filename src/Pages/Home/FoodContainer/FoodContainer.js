import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import Food from '../Food/Food';
import { ItemContext } from '../Home';

const FoodContainer = () => {
    const [item, setItems] = useContext(ItemContext)
    const location = useLocation()
    let fooditem = item;
    useEffect(() => {
        if (!item) {
            setItems('lunch')

        }
    }, [item])
    const [foods, setFoods] = useFoods(fooditem);
    console.log(foods)
    return (
        <>
            <div className='w-4/5 mx-auto grid sm:grid-cols-3 gap-x-32 gap-y-4 mt-10'>
                {
                    foods?.map(food => <Food key={food._id} food={food}></Food>)
                }

            </div>
            <button className='px-10 py-4 bg-slate-400 rounded text-xl font-medium mt-4 text-white'>Check out your food </button>

        </>
    );
};

export default FoodContainer;