import {
  Elements,
  CardElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";

import { loadStripe } from "@stripe/stripe-js";
import { useDispatch } from 'react-redux';
import { Presubscription } from "../store/actions/actions";
import axios from "axios";
import * as types from "../store/actions/actionType";

import { apiUrl } from "../config";
import { toast } from "react-toastify";
import { useState } from "react";
const options = {
  clientSecret: "pi_3KflWfGAkBzna46j1H8ZAcqp_secret_60Vmr4FPGE9i26sa3jsdz7KGr",
  appearance: { theme: "Dark" },
};


const stripePromise = loadStripe(
  "pk_test_51K7J3zEIGUZHqg4AQXRkFcz3FkVbBOa5MxjLqxY5z3EV5QpgJvDPmP285BvNt82FupjcBc8ZranqwU9rafxLKJTR009XtKs28i"
);
const stripe = require('stripe')('sk_test_51Kfhd8GAkBzna46j4z8AqKo6pvcSTp7K5i0PVX1sXH6c958hhsEZtXpN02DMoiM2wclh76VnQ9SFshxY0jrgCT2500W6vJgnKu')

const PaymentForm = ({ setkey, setStripemodal,interval,product,accessToken }) => {
  const dispatch = useDispatch();
  // const [id,setid] = useState('')
const apihit=async (id)=>{
  const data = {
    token: id,
    interval: interval,
    product: product,
  };
  
  const response =  axios.post(
    `${apiUrl}/subscription/createPre`,
   data,
    {headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },}      
  );
  if((await response).data.success){
    dispatch({
      type: types.SUBSCRIPTION,
      payload: response?.data.data,
    });
  toast.success(response.data.msg);
  }else{
    toast.error(response.data.msg);

  }
}
  const handleSubmit = (stripe, elements) => async () => {

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });   
    if (error) {
      console.log(error.message);
    } else {
      //  setid(paymentMethod.id)
    //   Presubscription(
    //   paymentMethod.id,
    //     interval,
    //   product,
    //   token
    // )
    // console.log(paymentMethod);
    
    // apihit(paymentMethod.id)
   
   
      
       
      setkey(paymentMethod.id);
      setStripemodal(false);
    }

    // const {error,token}= await stripe.createToken(cardElement);
  };
  // const stripe = useStripe();

  const elements = useElements();
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#303238",
        fontSize: "20px",
        margin: "10px",
        fontFamily: "sans-serif",
        fontSmoothing: "antialiased",
        border: "solid 10px black",
        "::placeholder": {
          color: "Black",
        },
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238",
        },
      },
    },
  };
  // https://www.youtube.com/watch?v=WTUYem2IxLA
  async function handleToken(token) {
    console.log(token);

    setkey(token.id);
    setStripemodal(false);
       Presubscription(
      token.id,
        interval,
      product,
      accessToken
    )
    // const response = await axios.post(
    //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
    //   { token, product }
    // );
    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }
  return (
    <div className="stripe">
      <h1>Enter Card Details</h1>
      {/* <CardElement options={CARD_ELEMENT_OPTIONS} /> */}
      <StripeCheckout
        stripeKey="pk_test_51K7J3zEIGUZHqg4AQXRkFcz3FkVbBOa5MxjLqxY5z3EV5QpgJvDPmP285BvNt82FupjcBc8ZranqwU9rafxLKJTR009XtKs28i"
        token={handleToken}     
        
        
      />
      {/* <button onClick={handleSubmit(stripe, elements)}>Buy</button> */}
    </div>
  );
};

const Stripe = ({ setkey, setStripemodal,token,interval,product }) => (
  <Elements stripe={stripePromise} options={options}>
    <PaymentForm setkey={setkey} setStripemodal={setStripemodal}interval={interval}
        product={product}
        accessToken={token} />
  </Elements>
);

export default Stripe;
