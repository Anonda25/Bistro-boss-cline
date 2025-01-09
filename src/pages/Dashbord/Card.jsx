import React from 'react';
import UseCart from '../../Hooks/UseCart';
import DashbordTitle from './DashbordTitle';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';

const Card = () => {
    const [cart, refetch ]=UseCart()
    // todo : the reduce minces the frist price and the secend price and array binding in a loop and one bay one sum it 
    const totalPrice = cart.reduce((total , items)=> total + items.price,0)
    const AxiosSecure =UseAxiosSecure()
    //* the delete btn 
    const hendleDelete=(id)=>{
       
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                AxiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                    const data= (res.data);
                    //*this a reload the data one time
                    refetch()
                    if (data.deletedCount> 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                       
                    }
                })
            }
        });
    }
    return (
        <div>
            <div className='mb-10'>
                <DashbordTitle subHadding="MY CART" heading="WANNA ADD MORE?"></DashbordTitle>
            </div>
            <div className='flex justify-between items-center '>
                <h1 className='text-xl font-bold '>TOTAL ORDER : {cart.length}</h1>
                <h2 className='text-xl font-bold'>TOTAL PRICE : ${totalPrice}</h2>
                {cart.length ?<Link to={"/dashbord/payment"}>
                    <button disabled={!cart.length} className='btn bg-[#D1A054]'>PAY</button>
                </Link>:
                <button disabled className='btn bg-[#D1A054]'>PAY</button>
                }
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-[#D1A054] text-white uppercase '>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Items Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item , index)=> 
                                <tr key={item._id}>
                                    <td>
                                       {index + 1}
                                    </td>
                                   
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={()=>hendleDelete(item._id)} className="btn text-xl bg-[#B91C1C]  text-white "><RiDeleteBin5Line /></button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Card;