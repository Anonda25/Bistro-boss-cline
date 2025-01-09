import { RiDeleteBin5Line } from "react-icons/ri";
import useMenu from "../../../Hooks/UseMenu";
import DashbordTitle from "../DashbordTitle";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, , refetch] = useMenu()

    const AxiosSecure = UseAxiosSecure()
    const hendleDelete = (item) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await AxiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `{items has been  deleted.}`,
                        icon: "success"
                    });
                }

            }
        });
    }

    return (
        <div>
            <DashbordTitle heading={"MANAGE ALL ITEMS"} subHadding="Hurry Up!"></DashbordTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, ind) => <tr key={item._id}>
                                    <th>
                                        {ind + 1}
                                    </th>
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
                                    <td>{item.price}</td>
                                    <th>
                                        <Link to={`/dashbord/updateItems/${item._id}`}>
                                            <button className="btn text-xl bg-[#B91C1C]  text-white "><FaEdit /></button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => hendleDelete(item)} className="btn text-xl bg-[#B91C1C]  text-white "><RiDeleteBin5Line /></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;