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
        </div>
    );
};

export default MenuCategory;