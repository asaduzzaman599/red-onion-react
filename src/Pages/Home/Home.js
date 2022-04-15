import React, { createContext, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import FoodContainer from './FoodContainer/FoodContainer';
import './Home.css'
import Menu from './Menu/Menu';
export const ItemContext = createContext() 
const Home = () => {
    const [item,setItem] = useState("lunch");
    return (
       <ItemContext.Provider value={[item,setItem]}>
        <Banner></Banner>
        <Menu setItem={setItem}></Menu>
        <Outlet />
        <Features></Features>
        </ItemContext.Provider>
    );
};

export default Home;