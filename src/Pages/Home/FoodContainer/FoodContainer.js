import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const FoodContainer = ({item}) => {
    const [foods,setFoods] = useState([]);

    console.log(foods)
    useEffect(()=>{
        fetch('data/foodData.json')
        .then(res=>res.json())
        .then(data=>setFoods(data[item]))
    },[item])
    return (
        <div className='container mx-auto grid sm:grid-cols-3 gap-x-32 gap-y-4 mt-10'>
            {
                foods.map(food=><Food key={food.id} food={food}></Food>)
            }
        </div>
    );
};

export default FoodContainer;