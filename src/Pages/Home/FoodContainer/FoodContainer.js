import React, { useEffect, useState } from 'react';

const FoodContainer = ({item}) => {
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('data/')
    },[item])
    return (
        <div>
            
        </div>
    );
};

export default FoodContainer;