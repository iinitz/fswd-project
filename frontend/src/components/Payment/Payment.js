import { React, useState} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ORDER_BY_ID } from "../../graphql/queryOrder";
import { useSession } from "../../contexts/SessionContext";
import { useParams } from "react-router-dom";
import PaymentCard from "./PaymentCard"


const Payment = () => {
  let { orderId } = useParams();

  const { error, loading, data } = useQuery(QUERY_ORDER_BY_ID, {
    variables: {_id: orderId},
  });


  

  function processPaymentBtn(log){
    console.log(log)
  }

  return(
    <>
    <PaymentCard order={data}/>
    <button
        onClick={() => processPaymentBtn("activate")}
        className="m-2 p-1 bg-gray-200 shadow-md hover:shadow-xl"
        >
        Process Payment
    </button>
    </>
  ) 
};

export default Payment;
