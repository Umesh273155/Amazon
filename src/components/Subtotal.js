import React from 'react';
import "./css/Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
import{useNavigate} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
 import "react-toastify/dist/ReactToastify.css";
//  import{toast} from "react-toastify";
//  toast.configure();

function Subtotal(){
  const Navigate=useNavigate();

    const [{basket,user},dispatch]=useStateValue();
    const total=getBasketTotal(basket);
     async function handleToken(token){
      const response =await axios.post("https://localhost:8080/checkout",{
        token,
        total
      })
      const {status}=response.data;
      if(status==="success"){
        TransformStream("Success ! Product Purchased",{
          type:"success"
        })
      }else{
        TransformStream("Error! Something went wrong" ,{
          type:"error"
        }) 
      }
     }
    return (
      <div className="subtotal">
   <CurrencyFormat
   renderText={(value)=>(
    <>
    <p>
      Subtotal({basket.length} items  );
      <strong>{value}</strong>
    </p>
    <small className="subtotal_left">
        <input type="checkbox"/>
        This order contains a gift 
    </small>
    </>
   )}
   decimalScale={2}
   value={getBasketTotal(basket)}
   displayType={"text"}
   thousandSeparator={true}
   prefix={"₹"}
   />
   <StripeCheckout
  stripeKey='pk_test_51MS5zLSIo6XJcrsbWelO0Z2DXENITNBOwQITJkzd0lj0xzTU4ZiOB7qjS3UtnL5H3AxwTaOMPB0pMWEEfeio8KzE00okxbRrP9'
    token={handleToken}  
  amount={total}
  /> 
    </div> 
 
    )
}
export default Subtotal;
