import { useQuery } from "@tanstack/react-query";
import DashbordTitle from "../DashbordTitle";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = UseAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey:['users'],
        queryFn : async ()=>{
            const res = await axiosSecure.get('/users');
            
         return res.data;
        }
    })

    const handlerDeleteUser = (user)=>{
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
                       
                       axiosSecure.delete(`/users/${user._id}`)
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

    const handlerMackAdmin=(user)=>{
        axiosSecure.patch(`users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount >0){
                refetch()
                Swal.fire({
                    title: `${user.name} is an admin now !`,
                    text: "You clicked the button!",
                    icon: "success"
                });
            }
        })
    }
    return (
        <div>
            <DashbordTitle heading={'kisu '} subHadding={'misy'}></DashbordTitle>
            <h2 className="text-3xl uppercase text-center">all user</h2>
        <div>
            <h2 className="text-3xl font-mono font-bold ">Total User {users.length}</h2>
                <div className="overflow-x-auto mt-5 rounded-lg">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white ">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>ROLE</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, ind) => <tr key={user._id}>
                                    <th>{ind + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>

                                        {
                                            user.role === 'admin' ? 
                                            'admin'
                                            :
                                                <button onClick={() => handlerMackAdmin(user)} className="bg-[#D1A054]  p-2 rounded-md text-4xl text-white">
                                                    <FaUsers className="text-xl"></FaUsers>
                                                </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handlerDeleteUser(user)} className="bg-[#B91C1C] p-2 rounded-md text-2xl text-white"><RiDeleteBinLine className="text-xl" /></button>
                                    </td>
                                </tr>)
                            }
                         
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
    );
};

export default AllUser;