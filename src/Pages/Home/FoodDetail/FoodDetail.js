import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetail = () => {
    const {category,foodId} = useParams()
    const [food, setFood] = useState(null);
    
    useEffect(()=>{
        fetch('https://github.com/asaduzzaman599/red-onion-react/blob/main/public/data/foodData.json')
        .then(res => res.json())
        .then(data => setFood(data[category].find(foodData=> foodData.id=== +foodId)))
           
    },[category,foodId]);
    console.log(food)
    const {name,description,price} = food || ''


    return (
        <div>
            <h3>detail</h3>
        </div>
    );
};

export default FoodDetail;