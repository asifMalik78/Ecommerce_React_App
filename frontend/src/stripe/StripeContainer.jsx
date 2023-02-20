import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Cart from "../pages/Cart";

const PUBLIC_KEY =
  "pk_test_51MdGBgSDTIjRXcOt1e9i5lQIxpitNNfWxLtBuWyC5GKTu5BLG57Xt3J7N2pMrtg9RQ4amtXAwIjgDdS66M6W2ZSM00BSjl6vkW";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Cart />
    </Elements>
  );
};

export default StripeContainer;
