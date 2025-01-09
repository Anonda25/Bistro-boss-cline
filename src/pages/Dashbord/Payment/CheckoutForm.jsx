import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import UseCart from '../../../Hooks/UseCart';



const CheckoutForm = () => {
    const [error, setError] = useState()
    const stripe = useStripe();
    const elements = useElements();
    const AxiosSecure = UseAxiosSecure();
    const [cart] = UseCart();
    const TotalPrice = cart.reduce((total, items) => total + items.price, 0)
    const [clientSecret, setClientSecret]=useState()


    useEffect(() => {

        AxiosSecure.post('/payment', { price: TotalPrice })
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })


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
        </form>
    );
};

export default CheckoutForm;