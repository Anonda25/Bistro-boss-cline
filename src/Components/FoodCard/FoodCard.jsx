import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";



const FoodCard = ({items}) => {
    const { name, price, image, recipe , _id} = items;
    const {user}=UseAuth()
    const Navigeat = useNavigate()
    const location = useLocation()
    const AxiosSecure = UseAxiosSecure()
    const[, refetch] =UseCart()


    // handler add to cart 
    const handlerAddToCart=()=>{
        if(user && user.email){
            // TODO : Send the cart items to the  databage
            const cartItems = {
                menuId : _id,
                email: user.email,
                name,
                image,
                price
            }
            AxiosSecure.post('/carts', cartItems)
            .then(res =>{
                console.log(res.data);
                if (res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        imageUrl: `${image}`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    //* refetch the card
                    refetch()
                }
            })
        }else{
            Swal.fire({
                title: "Please Login !",
                text: "You add to cart please Login !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login !"
            }).then((result) => {
                if (result.isConfirmed) {
                   // TODO : go to the login page 
                    Navigeat('/login', {state:{from: location}})
                   console.log('login ');
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="absolute bg-slate-900 text-white right-6 px-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handlerAddToCart} className="btn btn-outline border-0 border-orange-500 hover:text-orange-500  bg-slate-200 border-b-4 mt-4">Add to Card </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;