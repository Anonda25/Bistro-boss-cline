import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import UseCart from '../../../Hooks/UseCart';
import UseAuth from '../../../Hooks/UseAuth';
import Swal from 'sweetalert2';



const CheckoutForm = () => {
    const [error, setError] = useState()
    const stripe = useStripe();
    const elements = useElements();
    const AxiosSecure = UseAxiosSecure();
    const [cart, refetch] = UseCart();
    const [trangstionid , setTrangstionid]=useState()
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    const TotalPrice = cart.reduce((total, items) => total + items.price, 0)
    const [clientSecret, setClientSecret] = useState()
    const { user } = UseAuth()

    useEffect(() => {

       if(TotalPrice > 0){
           AxiosSecure.post('/payment', { price: TotalPrice })
               .then(res => {
                   console.log(res.data.clientSecret);
                   setClientSecret(res.data.clientSecret);
               })
       }


    }, [AxiosSecure, TotalPrice])





    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {

            return;
        };
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        };
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log("[ERROR]", error);
            setError(error.message)
        } else {
            console.log("[paymentMethod]", paymentMethod);
            setError('')
        };

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log("ConfirmError", confirmError);
            // setError(confirmError.message); // Display the error message
        } else {
            console.log('PaymentIntent', paymentIntent);
            if (paymentIntent.status === 'succeeded'){
                console.log(`Payment succeeded! Payment ID: ${paymentIntent.id}`);
                setTrangstionid(`Payment succeeded! Payment ID: ${paymentIntent.id}`); 


                const payment = {
                    email : user.email,
                    price: TotalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc data convert. use moment js to 
                    cardIds:cart.map(item => item._id),
                    menuItemIds:cart.map(item=> item.menuId),
                    status:'pending'
                }

                const res = await AxiosSecure.post('/payments', payment);
                console.log(res.data);
                refetch()
                if(res.data?.deleteResult?.deletedCount > 0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Payment has been success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }

    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-ghost btn-sm my-10' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-sm text-red-600 '>{error}</p>
            {
                trangstionid && <p>{trangstionid}</p>
            }
        </form>
    );
};

export default CheckoutForm;