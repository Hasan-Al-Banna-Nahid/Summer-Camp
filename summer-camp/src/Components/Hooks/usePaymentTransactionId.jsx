// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import usePayment from "./usePayment";

const usePaymentTransactionId = () => {
  const [payment, setPayment] = useState("");
  console.log(payment);

  const [payments] = usePayment();
  payments.map((payment) => setPayment(payment.transactionId));
  return { payment };
};

export default usePaymentTransactionId;
