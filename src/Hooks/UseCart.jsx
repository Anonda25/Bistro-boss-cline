import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";




const UseCart = () => {
    // TODO: tan stack query
    const AxiosSecure = UseAxiosSecure()
    const {user}=UseAuth()
    const {refetch,data : cart=[]}=useQuery({
        queryKey:['cart', user?.email],
        queryFn: async ()=>{
            const res = await AxiosSecure.get(`/carts?email=${user?.email}`);
            console.log(res);
            return res?.data
        }

    })

    return [cart, refetch ]
};
// refetch
export default UseCart;
