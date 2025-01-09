import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import DashbordTitle from "../DashbordTitle";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const PaymentsHistory = () => {
    const { user } = UseAuth();
    const AxiosSecure = UseAxiosSecure()
    const { data : payment = [] } = useQuery({
            queryKey:['payment'],
            queryFn: async ()=>{
                const res = await AxiosSecure.get(`/payments/${user.email}`);
                return res.data
            }
    })
    return (
        <div>
            <DashbordTitle subHadding="At a Glance!" heading="PAYMENT HISTORY"></DashbordTitle>
            <div>
                total payment {payment.length}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Price</th>
                                <th>TransactionId</th>
                                <th>StatUs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payment.map((item,ind) => <tr key={item._id} className="bg-base-200">
                                    <th>{ind + 1}</th>
                                    <td>{item.price}</td>
                                    <td>{item.transactionId}</td>
                                    <td>{item.status}</td>
                                </tr> )
                            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentsHistory;