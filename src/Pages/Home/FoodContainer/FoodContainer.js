import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Food from '../Food/Food';
import { ItemContext } from '../Home';

const FoodContainer = () => {
    const [foods, setFoods] = useState([]);
    const [item, setItems] = useContext(ItemContext)
    const location = useLocation()

    console.log(location)
    useEffect(() => {
        let fooditem = item;
        if(!item){
            setItems('lunch')
            
        }
        fetch('https://raw.githubusercontent.com/asaduzzaman599/red-onion-react/main/public/data/foodData.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data[item])
                console.log(data,fooditem)
            })
            
    console.log(location)
    }, [item])
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