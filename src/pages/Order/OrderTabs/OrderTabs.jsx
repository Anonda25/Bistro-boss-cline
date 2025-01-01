import FoodCard from "../../../Components/FoodCard/FoodCard";


const OrderTabs = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {
                items.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTabs;