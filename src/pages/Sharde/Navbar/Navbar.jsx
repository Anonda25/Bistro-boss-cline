import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FiShoppingCart } from 'react-icons/fi';
import UseCart from '../../../Hooks/UseCart';

const navbar = () => {

    const { user, Logout } = useContext(AuthContext)
    const [cart]=UseCart()

    const handlerLogOut = () => {
        Logout()
            .then(() => { })
            .catch(err => {
                console.log(err);
            })
    }
    const links = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/secreat'}>Our secreat</NavLink></li>
        <li><NavLink to={'/order/salad'}>Order Food</NavLink></li>
        <li>
            <NavLink to={'/dashbord/cart'}>
                <button className="btn ">
                    <FiShoppingCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </NavLink>
        </li>


      

    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl  text-white mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow justify-center items-center">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 items-center justify-center">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <span>{user?.displayName}</span>
                                <button onClick={handlerLogOut} className="btn btn-ghost">LogOut</button>
                            </> :
                            <>
                                <li><NavLink to={'/login'}>Login</NavLink></li>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default navbar;