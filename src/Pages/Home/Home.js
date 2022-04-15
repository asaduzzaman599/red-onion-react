import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import FoodContainer from './FoodContainer/FoodContainer';
import './Home.css'
import Menu from './Menu/Menu';
const Home = () => {
    const [item,setItem] = useState("lunch");
    return (
       <>
        <Banner></Banner>
        <Menu setItem={setItem}></Menu>
        <FoodContainer item={item}></FoodContainer>
        <Features></Features>
        </>
    );
};

export default Home;