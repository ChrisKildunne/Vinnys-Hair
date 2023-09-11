import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import * as ordersAPI from '../../utilities/orders-api';

const CheckoutForm = ({ user }) => {
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const [totalPrice, setTotalPrice] = useState(null)

    const stripe = useStripe();
    const elements = useElements();
    
    useEffect(() => {
        async function getTotalPrice() {
          const total = await ordersAPI.getTotal(user._id);
          setTotalPrice(total);
        }
        getTotalPrice();
      }, [user]);
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        
        try {
            const response = await ordersAPI.createPaymentIntent(user._id);
            const { clientSecret } = await response.json();
            
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });
            
            if (result.error) {
                console.error(result.error.message);
            } else {
                setPaymentSuccess(true)
                await ordersAPI.checkout();
        }
        } catch (error) {
        console.error(' payment: error', error);
        }
    };

    return (
        <>
        {paymentSuccess ? (
            <p>Thank you for your purchase of ${totalPrice} </p>
        ):(
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button disabled={!stripe}>Submit</button>
        </form>
        )}
        </>
    );
    };

export default CheckoutForm;