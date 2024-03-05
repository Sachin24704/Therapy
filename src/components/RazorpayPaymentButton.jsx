"use client";
import { useEffect, useRef } from "react";
export default function RazorpayPaymentButton({ payment_btn_id }) {
  // useEffect(() => {
  //   const rzpPaymentForm = document.getElementById("rzp_payment_form");

  //   if (!rzpPaymentForm.hasChildNodes()) {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/payment-button.js";
  //     script.async = true;
  //     script.dataset.payment_button_id = payment_btn_id
  //       ? payment_btn_id
  //       : "pl_Nhp9k5DIM9O3k5";
  //     rzpPaymentForm.appendChild(script);
  //   }
  // }, [payment_btn_id]);

  const rzpPaymentFormRef = useRef(null);

  useEffect(() => {
    const rzpPaymentForm = rzpPaymentFormRef.current;

    if (rzpPaymentForm && !rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = payment_btn_id
        ? payment_btn_id
        : "pl_Nhp9k5DIM9O3k5";
      rzpPaymentForm.appendChild(script);
    }

    return () => {
      if (rzpPaymentForm) {
        rzpPaymentForm.innerHTML = ""; // Clear the content on unmount
      }
    };
  }, [payment_btn_id]);

  return (
    <div className="App">
      <form ref={rzpPaymentFormRef} id={`rzp_payment_form_${payment_btn_id}`} />
      {/* <h2>This line comes below the payment button</h2> */}
    </div>
  );
}
