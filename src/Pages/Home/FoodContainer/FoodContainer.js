import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import Food from '../Food/Food';
import { ItemContext } from '../Home';

const FoodContainer = () => {
    const [item, setItems] = useContext(ItemContext)
    const location = useLocation()
    let fooditem = item;
   
        if(!item){
            setItems('lunch')
            
        }
    const [foods, setFoods] = useFoods(fooditem);
    
    return (
        <>
            <div className='container mx-auto grid sm:grid-cols-3 gap-x-32 gap-y-4 mt-10'>
                {
                    foods?.map(food => <Food key={food.id} food={food}></Food>)
                }

            </div>
            <button className='px-10 py-4 bg-slate-400 rounded text-xl font-medium mt-4 text-white'>Check out your food </button>

        </>
    );
};

export default FoodContainer;