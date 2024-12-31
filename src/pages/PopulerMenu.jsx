import React, { useEffect, useState } from 'react';
import SectionTitle from '../Components/Sheard/SectionTitle';
import MenuItem from '../Components/Sheard/MenuItems/MenuItem';

const PopulerMenu = () => {
    const [items, setItems]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data =>{
            const populerItems = data.filter(item => item.category === 'popular')
            setItems(populerItems)
        })
    },[])
    return (
        <section className='mb-12'>
            <SectionTitle subHadding="From Our Menu" heading="Populer items"></SectionTitle>
           <div className='grid md:grid-cols-2 gap-4'>
                {
                    items.map(item => <MenuItem key={item._id} itme={item}></MenuItem>)
                }
           </div>
            <button className='btn'>viewMenu</button>
        </section>
        
    );
};

export default PopulerMenu;