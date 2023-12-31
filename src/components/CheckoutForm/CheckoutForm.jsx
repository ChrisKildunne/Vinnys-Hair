import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import * as ordersAPI from '../../utilities/orders-api';
import './CheckoutForm.css'
  
export default function CheckoutForm({ user }){
    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const [totalPrice, setTotalPrice] = useState(null)

    const stripe = useStripe();
    const elements = useElements();
    
    useEffect(() => {
        async function getTotalPrice() {
          const total = await ordersAPI.getTotal();
          setTotalPrice(total);
        }
        getTotalPrice();
      }, []);
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        
        try {
            const response = await ordersAPI.createPaymentIntent();
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
                <div className="alert alert-success mt-4">
                    Thank you for your purchase of ${totalPrice}
                </div>
            ) : (
                <div className="custom-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Card Information</label>
                            <div className="form-control">
                                <CardElement options={CARD_ELEMENT_OPTIONS} />
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3" disabled={!stripe}>Submit</button>
                    </form>
                </div>
            )}
        </>
    );
    
}
