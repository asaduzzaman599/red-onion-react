import React, { createContext, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import FoodContainer from './FoodContainer/FoodContainer';
import './Home.css'
import Menu from './Menu/Menu';
export const ItemContext = createContext()
export const CartContext = createContext()
const Home = ({ searchFood }) => {
    const [item, setItem] = useState("");
    const [cart, setCart] = useState([])
    return (
        <ItemContext.Provider value={[item, setItem]}>
            <CartContext.Provider value={[cart, setCart]}>
                <Banner searchFood={searchFood}></Banner>
                <Menu setItem={setItem}></Menu>
                <Outlet />
                <Features></Features>
            </CartContext.Provider>
        </ItemContext.Provider>
    );
};

export default Home;