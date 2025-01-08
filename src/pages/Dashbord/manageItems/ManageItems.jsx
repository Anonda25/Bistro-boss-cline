import { RiDeleteBin5Line } from "react-icons/ri";
import useMenu from "../../../Hooks/UseMenu";
import DashbordTitle from "../DashbordTitle";
import { FaEdit } from "react-icons/fa";


const ManageItems = () => {
    const [menu] = useMenu()

    const hendleDelete = (id) => {
        console.log(id);
    }

    const handleUpdate = (id) => {
        console.log(id);
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
                                        <button onClick={() => handleUpdate(item._id)} className="btn text-xl bg-[#B91C1C]  text-white "><FaEdit /></button>
                                    </th>
                                    <th>
                                        <button onClick={() => hendleDelete(item._id)} className="btn text-xl bg-[#B91C1C]  text-white "><RiDeleteBin5Line /></button>
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