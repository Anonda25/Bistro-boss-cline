import { useForm } from "react-hook-form";
import DashbordTitle from "../DashbordTitle";
import {  FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const image_Hoisting_api = import.meta.env.VITE_IMBB_API_KEY

const image_hosting_api_key = `https://api.imgbb.com/1/upload?key=${image_Hoisting_api}`
const AddItems = () => {
    const AxiosPublic = UseAxiosPublic()
    const AxiosSceure = UseAxiosSecure()
    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) => {
        console.log(data)
        const imageFile = {image : data.image[0]}
        const res = await AxiosPublic.post(image_hosting_api_key, imageFile, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });

        if(res.data.success){
            //save the image in db
            const menuItems = {
                name: data.name,
                category: data.category,
                price:parseFloat(data.price),
                recipe:data.recipe,
                image: res.data.data.display_url
            }

            const nemuRes = await AxiosSceure.post('/menu', menuItems)
            console.log(nemuRes.data);
        }
        console.log(res.data);


    }
    return (
        <div>
            <DashbordTitle subHadding={"--- What's new?---"} heading={"ADD AN ITEM"}></DashbordTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <div>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Recipe name*</span>
                            </div>
                            <input
                                {...register("name", {required: true})}
                                type="text"
                                placeholder="Type here"
                                required
                                className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="flex gap-6 my-6">
                        {/* category */}
                        <div className="w-full ">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select defaultValue={"default"}
                                    {...register("category", { required: true })}
                                    className="select select-bordered w-full ">
                                    <option disabled value="default">Chouge on the Category</option>
                                    <option value="Salad">Salad</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Drinks">Drinks</option>

                                </select>

                            </label>
                        </div>
                        {/* Price  */}
                        <div className="w-full">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input
                                    {...register("price", { required: true })}
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full " />

                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                            <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                            
                        </label>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    
                    <button className="btn bg-[#D1A054] rounded-none px-10 text-white">Add Items<FaUtensils className="text-white"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;