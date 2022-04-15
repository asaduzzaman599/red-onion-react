import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../Home';
import './Menu.css'
const Menu = ({setItem}) => {
    const [item,setitem] = useContext(ItemContext)
    const [active,setActive] = useState({lunch:true})
    const navigate = useNavigate()
/* 
    useEffect(()=>{
        setActive({})
    },[]) */
    useEffect(()=>{
        setActive({[item]:true})
    },[item])
    console.log(active)
    const handleMenu = (item)=>{
        setItem(item);
        setActive({[item]:true})

        navigate('/')
    }
    return (
            <nav className=' continer mx-auto font-medium py-2 sm:flex justify-center gap-10 '>
            <button onClick={()=>handleMenu("breakfast")} className={active?.breakfast?'active':''}>Breakfast</button>
            <button onClick={()=>handleMenu("lunch")} className={active?.lunch?'active':''}>Lunch</button>
            <button onClick={()=>handleMenu("dinner")} className={active?.dinner?'active':''}>Dinner</button>
        </nav>
    );
};

export default Menu;