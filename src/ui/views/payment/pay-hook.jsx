
import { Button, message } from 'antd';
import React from 'react';
// import { Button } from 'react-bootstrap';
import { usePaystackPayment } from 'react-paystack';
// import paystackConfig from '../../../utils/network_utils/paystack_config';
// import Layout from '../../layout/insex';


  const Checkout = ({email,amount,reference}) => {
    const conf = {
    reference: reference,
    email: email,
    currency: "GHS",
    amount: amount,
    publicKey: 'pk_test_051ba69b3f125bfcdb6dc133e72b04c8436ffbb4',
}
    const onClose = () => {
        message.error("Payment canceled")
      console.log('closed')
    }
    const onSuccess = (reference) => {
        console.log(reference);
    };
      const initializePayment = usePaystackPayment(conf);
      return (
        <div>
          
            <Button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Proceed to paystack checkout</Button>
           
        </div>
      );
  };
  
 export default Checkout