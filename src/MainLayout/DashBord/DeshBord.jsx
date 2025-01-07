import { FaBook, FaCalendarAlt, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { HiOutlineMenu, HiShoppingBag } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { NavLink, Outlet } from 'react-router-dom';
import UseCart from '../../Hooks/UseCart';
import UseIsAdmin from '../../Hooks/UseIsAdmin';

const DeshBord = () => {
    const [cart] = UseCart()

    // const isAdmain = true;
    const [isAdmain] = UseIsAdmin();
    return (
        <div className='flex gap-20'>
            <div className='w-64 bg-[#D1A054] min-h-screen '>
                <div className='uppercase text-xl  font-semibold flex justify-center flex-col items-center mt-10'>
                    <h2>BISTRO BOSS</h2>
                    <p>RESTURENT</p>
                </div>
                <ul className='menu my-10'>
                    {
                        isAdmain ?
                            <>
                                <li><NavLink to={'/dashbord/adminHome'}> <FaHome></FaHome>ADMIN HOME</NavLink></li>
                                <li><NavLink to={'/dashbord/addItems'}> <FaUtensils />ADD ITEMS</NavLink></li>
                                <li><NavLink to={'/dashbord/manageItems'}> <FaList />MANAGE ITEMS</NavLink></li>
                                <li><NavLink to={'/dashbord/manageBooking'}> <FaBook></FaBook>MANAGE BOOKING</NavLink></li>
                                <li><NavLink to={'/dashbord/allUser'}> <FaUsers></FaUsers>ALL USER</NavLink></li>

                            </>
                            :
                            <>

                                <li><NavLink to={'/dashbord/UserHome'}> <FaHome></FaHome>USER HOME</NavLink></li>
                                <li><NavLink to={'/dashbord/reservation'}> <FaCalendarAlt />RESERVASTION</NavLink></li>
                                <li><NavLink to={'/dashbord/PaymentHistory'}> <RiSecurePaymentLine />PAYMENT HISTORY</NavLink></li>
                                <li><NavLink to={'/dashbord/cart'}> <FaShoppingCart></FaShoppingCart>MY CART ( {cart.length} )</NavLink></li>
                                <li><NavLink to={'/dashbord/addReviwe'}> <FaShoppingCart></FaShoppingCart>ADD REVIWE</NavLink></li>
                                <li><NavLink to={'/dashbord/myBooking'}> <FaShoppingCart></FaShoppingCart>MY BOOKING</NavLink></li>
                            </>
                    }
                    <div className="divider text-white"></div>
                    <li><NavLink to={'/'}> <FaHome></FaHome> HOME</NavLink></li>
                    <li><NavLink to={'/order/salad'}> <HiOutlineMenu />MENU</NavLink></li>
                    <li><NavLink to={'/order/salad'}> <HiShoppingBag />SHOP</NavLink></li>
                    <li><NavLink to={'/order/salad'}><MdEmail />CONTACT</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DeshBord;