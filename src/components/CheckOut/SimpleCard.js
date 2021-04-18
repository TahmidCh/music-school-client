import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [PaymentError, setPaymentError] = useState(null);
    const [PaymentSuccess, setPaymentSuccess]= useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btn-dark btn-sm" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {/* <p className="text-dark">Total amount is <strong>$100</strong></p> */}
            {
                PaymentError && <p style={{color :'red'}}>{PaymentError}</p>
            }
            {
                PaymentSuccess && <p style={{color: 'green'}}>Your Payment was succesful</p>
            }
        </div>
    );
};

export default SimpleCardForm;