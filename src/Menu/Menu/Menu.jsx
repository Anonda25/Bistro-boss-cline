import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../pages/Sharde/Cover/Cover';
import img from '../../assets/menu/menu-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../Hooks/UseMenu';
import SectionTitle from '../../Components/Sheard/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';





const Menu = () => {
    const [items] = useMenu()

    const salad = items.filter(item => item.category === 'salad')
    const dessert = items.filter(item => item.category === 'dessert')
    const pizza = items.filter(item => item.category === 'pizza')
    const soup = items.filter(item => item.category === 'soup')
    const offered = items.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            {/* main cover image  */}
            <Cover img={img} title="Our menu"></Cover>
            {/* section title here */}
            <SectionTitle subHadding="Don't miss" heading="today offerd"></SectionTitle>
            {/* offerd menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory
                items={dessert}
                title="Dessert"
                img={dessertImg}
            >
            </MenuCategory>
            {/* fizza menu items */}
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
                items={soup}
                title="soup"
                img={soupImg}
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
                items={salad}
                title="salad"
                img={saladImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;