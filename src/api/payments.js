import axiosSecure from ".";

// create payment intent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post(`/create-payment-intent`, price);
  return data;
};
// save payment info
export const savePaymentInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/payments", paymentInfo);
  return data;
};
