import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg';
import Cover from '../../Sharde/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/UseMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    console.log(category);
    const inittialIndex = categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(inittialIndex);
    const [items] = useMenu();
    const salad = items.filter(item => item.category === 'salad')
    const dessert = items.filter(item => item.category === 'dessert')
    const pizza = items.filter(item => item.category === 'pizza')
    const soup = items.filter(item => item.category === 'soup')
    const drinks = items.filter(item => item.category === 'drinks')
    return (
        <div className='items-center'>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title='Order Food'></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>Soup </Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;