import SectionTitle from '../Components/Sheard/SectionTitle';
import MenuItem from '../Components/Sheard/MenuItems/MenuItem';
import useMenu from '../Hooks/UseMenu';

const PopulerMenu = () => {
    const [items]=useMenu()
    const populer = items.filter(item => item.category === 'popular')
    return (
        <section className='mb-12'>
            <SectionTitle subHadding="From Our Menu" heading="Populer items"></SectionTitle>
           <div className='grid md:grid-cols-2 gap-4'>
                {
                    populer.map(item => <MenuItem key={item._id} itme={item}></MenuItem>)
                }
           </div>
            <button className='btn'>viewMenu</button>
        </section>
        
    );
};

export default PopulerMenu;