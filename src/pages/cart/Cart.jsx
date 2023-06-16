import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import { ToastContainer,toast } from 'react-toastify';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../../redux/shopSlice";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Cart = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [totalAmt,setTotalAmt] = useState("")
  const [payNow,setPayNow] = useState(false);
  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    });
    setTotalAmt(price);
  },[productData])
  const handleChekout = () =>{
   if(userInfo){
    setPayNow(true)
   }
   else{
    toast.error("Please Sign in to CheckOut")
   }
  }

  const payment = async(token)=>{
    await axios.post("http://localhost:8000/pay",{
      amount : totalAmt*100,
      token : token,
    })
  }
  return (
    <div className="itemCart">
      <img
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyYWwlMjBpbWFnZSUyMGZ1bGwlMjBoZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        alt=""
      />
      <div className="total">
        <div className="cartItem">
          <div>
          <h2 style={{marginBottom:"50px"}}>Shopping Cart</h2>
          </div>
          <div>
            {
              productData.map((item)=>(
                <div key={item._id} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{display:'flex', justifyContent:"center",alignItems:"center",}}>  
                  <i onClick={()=>dispatch(deleteItem(item._id))& toast.error(`${item.title} is removed`)} class="fa-solid 3xl fa-xmark" style={{color:"black",cursor:"pointer"}}></i>
                  <img style={{width:"96px",height:'96px',marginLeft:"20px",marginBottom:"20px"}} src={item.image} alt="productImg" />
                  </div>
                  <h5>{item.title}</h5>
                  <p>${item.price}</p>
                  <div style={{margin:"10px",display:"flex",backgroundColor:"lightgray"}}>
                  <p style={{marginRight:"10px"}}>Quantity </p>
                  <span
                  onClick={()=>dispatch(decrementQuantity({
                    _id:item._id,
                     title: item.title,
                     image: item.image,
                     price: item.price,
                     quantity: 1,
                     description: item.description,
                     })
                     )}
                   style={{backgroundColor:"gray",width:"20px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",}}>-</span>
                  <span style={{marginLeft:"10px",marginRight:"10px"}}>{item.quantity}</span>
                  <span
                  onClick={()=>dispatch(incrementQuantity({
                    _id:item._id,
                     title: item.title,
                     image: item.image,
                     price: item.price,
                     quantity: 1,
                     description: item.description,
                     })
                     )}
                  style={{backgroundColor:"gray",width:"20px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",}}>+</span>
                  </div>
                  <p>${item.quantity * item.price}</p>
                </div>
                
              ))
            }
            <button onClick={()=>dispatch(resetCart()) & toast.error("Your Cart is Empty!")} style={{backgroundColor:"coral",fontSize:"20px",color:"black"}}>Reset Cart</button>
            <Link style={{textDecoration:"none"}} to="/">
            <span style={{backgroundColor:"lightgoldenrodyellow",cursor:"pointer",color:"black"}}>go Shopping</span>
            </Link>
          </div>
        </div>
        <div className="cartTotal">
          <h2 style={{marginBottom:"10px"}}>Cart Total</h2>
          <div className="sub">
            <p style={{marginBottom:"10px"}}>
              Subtotals {" "} : <b>$ {totalAmt}</b>
            </p>
            <p style={{marginBottom:"20px"}}>
              Shipping {" "} :   Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Porro, quos rem in nam nihil consectetur officia eos ex
              provident necessitatibus dolorum accusamus iusto vero, iure
              incidunt quisquam amet, perferendis ipsum.
            </p>
          </div>
          <p style={{marginTop:"10px"}}>Total : {" "} <b style={{marginLeft:"100px"}}>${totalAmt}</b></p>
          <button onClick={handleChekout}>Proceed to Checkout</button>
          {
            payNow && <div style={{display:"flex"}}>
              <StripeCheckout
              stripeKey="pk_test_51NGPwpSIDVfiUhhBGNTVO73uKgKOSZrI8jv9E6j8cGCdnvd2d8RERlHXTyez4OWeNOnV1GoXOeCybrVaX1d1y6FF00DaKEmBYx"
              name="ShopKeep Online Shooping"
              amount={totalAmt * 100}
              label="Pay to Shop"
              description={`Your Payment amount is $${totalAmt}`}
              token={payment}
              email={userInfo.email}
              />
            </div>
          }
        </div>

      </div>
      <ToastContainer
      position='top-left'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
      />
    </div>
  );
};

export default Cart;
