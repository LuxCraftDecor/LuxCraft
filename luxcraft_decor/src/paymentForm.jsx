import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        console.error(error);
        setPaymentError('Payment failed. Please check your card details.');
      } else {
        // Send the token to your server for processing
        const response = await axios.post('http://localhost:3001/charge', {
          token: token,
          amount: 1000, // Example amount in cents
          description: 'Example Charge',
        });

        console.log(response.data);

        setPaymentError(null);
      }
    } catch (error) {
      console.error(error);
      setPaymentError('Payment failed. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=''>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <div style={{ color: 'red' }}>{paymentError}</div>}
    </div>
  );
};

export default PaymentForm;