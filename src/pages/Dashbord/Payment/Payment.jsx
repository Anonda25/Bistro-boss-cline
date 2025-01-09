import React from 'react';
import DashbordTitle from '../DashbordTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    // const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_KEY}`)
    return (
        <div>
            <DashbordTitle heading={"payment"} subHadding={"Please Pay to Eat"}></DashbordTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;