import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";
import useAuth from "../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createPaymentIntent, savePaymentInfo } from "../../api/payments";
import { updateRole} from "../../api/auth";


const CheckoutForm = ({ paymentInfo, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
 console.log(paymentInfo, "info in checkcout");
  // Create Payment Intent
  useEffect(() => {
    // create payment intent
    if (paymentInfo?.price > 0) {
      createPaymentIntent({ price: paymentInfo.price }).then((data) => {
        console.log(data);
        setClientSecret(data?.clientSecret);
      });
    }
  }, [paymentInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // card data lookup [async network call]
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    // clientSecret: tk katbe amount secretly
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent?.status === "succeeded") {
      try {
        const proPaymentInfo = {
          ...paymentInfo,
          transactionId: paymentIntent?.id,
          date: new Date(),
        };
        // save payment information to the server
        await savePaymentInfo(proPaymentInfo);
        // update room status in db
        
        await updateRole(paymentInfo?.proUserEmail, "pro-user");
        const text = `Booking successful ${paymentIntent.id}`;
        toast.success(text);
        navigate("/");
      } catch (e) {
        console.log(e);
        toast.error(e.message);
      } finally {
        setProcessing(false);
      }

      setProcessing(false);
    }
  };

  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-around mt-2">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner9 className="m-auto animate-spin" size={24} />
            ) : (
              `Pay ${paymentInfo.price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className="ml-8 text-red-600">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
