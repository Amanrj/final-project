import Razorpay from 'razorpay';

const initiateRazorpayPayment = ({amount,orderId}) => {
  const options = {
    key: 'rzp_test_A4auelGKapiY1w', // Replace with your Razorpay Key ID
    amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: 'INR',
    name: 'Aman Project',
    description: 'Test Transaction',
    image: 'https://media.cntraveler.com/photos/5be477cf2e350417aea9dc08/16:9/w_1920,c_limit/CNT_Intel_Plane_taking_off_TM-Detwiler_110718.jpg',
    order_id: orderId, // Replace with your order ID
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    notes: {
      address: '',
    },
    theme: {
      color: '#3399cc',
    },
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
  };

  const rzpInstance = new Razorpay(options);
  rzpInstance.on('payment.failed', function (response) {
    alert('Payment failed!');
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
  rzpInstance.open();
};

export default initiateRazorpayPayment;
