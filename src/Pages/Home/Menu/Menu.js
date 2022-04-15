import React, { useEffect, useState } from 'react';
import './Menu.css'
const Menu = ({setItem}) => {
    const [active,setActive] = useState({lunch:true})
/* 
    useEffect(()=>{
        setActive({})
    },[]) */
    console.log(active)
    const handleMenu = (item)=>{
        setItem(item);
        setActive({[item]:true})

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