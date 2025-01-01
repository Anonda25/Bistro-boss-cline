import { Link } from 'react-router-dom';
import MenuItem from '../../Components/Sheard/MenuItems/MenuItem';
import Cover from '../../pages/Sharde/Cover/Cover';

const MenuCategory = ({ items , title, img}) => {
    return (
        <div className='p-10'>
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-4 mt-5'>
                {
                    items.map(item =>
                         <MenuItem 
                         key={item._id} 
                         itme={item}>
                         </MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Oder now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;