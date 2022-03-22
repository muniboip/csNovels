import {
  Elements,
  CardElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const options = {
  clientSecret: "pi_3KflWfGAkBzna46j1H8ZAcqp_secret_60Vmr4FPGE9i26sa3jsdz7KGr",
  appearance: { theme: "Dark" },
};

const stripePromise = loadStripe(
  "pk_test_51K7J3zEIGUZHqg4AQXRkFcz3FkVbBOa5MxjLqxY5z3EV5QpgJvDPmP285BvNt82FupjcBc8ZranqwU9rafxLKJTR009XtKs28i"
);

const PaymentForm = ({ setkey, setStripemodal }) => {
  const handleSubmit = (stripe, elements) => async () => {
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error.message);
    } else {
      setkey(paymentMethod.id);
      setStripemodal(false);
    }

    // const {error,token}= await stripe.createToken(cardElement);
  };
  const stripe = useStripe();
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
  return (
    <div className="stripe">
      <h1>Enter Card Details</h1>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button onClick={handleSubmit(stripe, elements)}>Buy</button>
    </div>
  );
};

const Stripe = ({ setkey, setStripemodal }) => (
  <Elements stripe={stripePromise} options={options}>
    <PaymentForm setkey={setkey} setStripemodal={setStripemodal} />
  </Elements>
);

export default Stripe;
