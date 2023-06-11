import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../Hooks/useCart";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [classes] = useCart();
  const singleClass = classes[0];
  console.log(singleClass);
  const total = singleClass ? singleClass.price : 0;
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <h2 className="text-3xl"> Please Pay</h2>
      {singleClass ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={[singleClass]} price={price} />
        </Elements>
      ) : (
        <p>No class found.</p>
      )}
    </div>
  );
};

export default Payment;
