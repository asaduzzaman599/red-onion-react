import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Food from '../Food/Food';
import { ItemContext } from '../Home';

const SearchFood = ({ searchFood }) => {
    const [searchText, setSearchText] = searchFood;
    const [foods, setFoods] = useState([])

    const [item, setItems] = useContext(ItemContext)
    setItems('')
    useEffect(() => {
        const url = `https://red-onion-asaduzzaman599.herokuapp.com/searchFood?name=${searchText}`
        axios.get(url).then(({ data }) => setFoods(data))
    }, [searchText])

    return (
        <>
            <h3 className='px-10 py-4  rounded text-xl font-medium mt-4 text-dark'>Serch Result ({foods.length}) </h3>

            <div className='w-4/5 mx-auto grid sm:grid-cols-3 gap-x-32 gap-y-4 mt-10'>
                {
                    foods?.map(food => <Food key={food._id} food={food}></Food>)
                }

            </div>

        </>
    );
};

export default SearchFood;