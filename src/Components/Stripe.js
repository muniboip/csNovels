
import {
    Elements,
    CardElement,
    useElements,
    useStripe
  } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";
  
  const stripePromise = loadStripe("pk_test_51K7J3zEIGUZHqg4AQXRkFcz3FkVbBOa5MxjLqxY5z3EV5QpgJvDPmP285BvNt82FupjcBc8ZranqwU9rafxLKJTR009XtKs28i");
  
  
  const PaymentForm = ({setkey,setStripemodal}) => {
      const handleSubmit = (stripe, elements) => async () => {
        const cardElement = elements.getElement(CardElement);
      
        const result= await stripe.createToken(cardElement);
        if (result.error) {
            console.log(result.error.message);
          } else {
              
            setkey(result.token.id)
            setStripemodal(false)
            
          }
      };
    const stripe = useStripe();
    const elements = useElements();
    return (
      <>
        <h1>stripe form</h1>
        <CardElement />
        <button onClick={handleSubmit(stripe, elements)}>Buy</button>
      </>
    );
  }
  
  const Stripe  = ({setkey,setStripemodal}) => (
    <Elements stripe={stripePromise}>
      <PaymentForm setkey={setkey} setStripemodal={setStripemodal}/>
    </Elements>
  );

  export default Stripe