import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetail = () => {
    const {category,foodId} = useParams()
    const [food, setFood] = useState(null);
    
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/asaduzzaman599/red-onion-react/main/public/data/foodData.json')
        .then(res => res.json())
        .then(data => setFood(data[category]?.find(foodItem=>foodItem.id === foodId)))
           
    },[]);
    console.log(food)


    return (
        <div>
            <h3>detail</h3>
        </div>
    );
};

export default FoodDetail;