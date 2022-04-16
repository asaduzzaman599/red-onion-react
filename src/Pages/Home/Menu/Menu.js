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
    const handleMenu = (item)=>{
        setItem(item);
        setActive({[item]:true})

        navigate('/')
    }
    return (
            <nav className=' continer mx-auto py-2 flex justify-center gap-4 sm:gap-10 '>
            <button onClick={()=>handleMenu("breakfast")} className={`font-medium ${active?.breakfast?'active':''}`}>Breakfast</button>
            <button onClick={()=>handleMenu("lunch")} className={`font-medium ${active?.lunch?'active':''}`}>Lunch</button>
            <button onClick={()=>handleMenu("dinner")} className={`font-medium ${active?.dinner?'active':''}`}>Dinner</button>
        </nav>
    );
};

export default Menu;