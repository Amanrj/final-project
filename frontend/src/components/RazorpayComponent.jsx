import React, { useEffect } from 'react';

import API from "./Axios";
import { useNavigate } from 'react-router-dom';

const RazorpayComponent = ({ amount, orderid,setonPaymentFail,setonPaymentSucess }) => {
  // const navigate=useNavigate();

  setonPaymentFail(null)
  setonPaymentSucess(null)


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!amount) return;

    const options = {
      key: 'rzp_test_bixwf8Ucq0MuaD', // Replace with your actual Razorpay Key ID
      amount: amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Payment for flight Booking...",
      image: "https://example.com/your_logo",
      order_id: orderid,
      handler: function (response) {
        // handelBooking();
        setonPaymentSucess(response)
        
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
     
      setonPaymentFail(response.error);
      // alert("payment Fail")

    });

    rzp1.open(); // Open the Razorpay payment window automatically

    return () => {
      // rzp1.clear();
    };
  }, [amount, orderid]); // Dependency array to re-run effect when props change

  return null; // Return null because we don't need to render anything in this component
};

export default RazorpayComponent;
