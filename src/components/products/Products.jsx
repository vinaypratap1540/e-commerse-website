import React, { useEffect, useState } from 'react'
import "./products.scss"
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/shopSlice'
import { ToastContainer,toast } from 'react-toastify'
const Products = () => {
  const dispatch = useDispatch()
  const [details,setDetails] = useState({});
  let [baseQty,setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(()=>{
    setDetails(location.state.item);
  },[])
  return (
    <div>
      <div className='pI'> 
        <img src={details.image} alt="" />
        <div className='range'>
        <h2>{details.title}</h2>
        <p style={{textDecoration:"line-through",fontSize:"13px",color:"gray",marginLeft:"10px",marginTop:"10px"}}>Old Price : ${details.oldPrice}</p>
         <p style={{marginLeft:"10px",marginTop:"10px",}}><b>Current Price : </b> ${details.price}</p>
         <p style={{maxWidth:"650px",marginTop:"30px"}}>{details.description}</p>
         <div className='quantity'>
         <p>Quantity</p>
         <div className="but">
         <button onClick={()=> setBaseQty(baseQty === 1 ? baseQty=1 : baseQty-1)}>-</button>
         <span>{baseQty}</span>
         <button onClick={()=> setBaseQty(baseQty + 1)}>+</button>
         </div>
         </div>
         <button 
         onClick={()=>dispatch(addToCart({
        _id:details._id,
         title: details.title,
         image: details.image,
         price: details.price,
         quantity: baseQty,
         description: details.description,
         })
         ) & toast.success(`${details.title} is added`)
        }
         style={{padding:"10px",width:"100px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",marginLeft:"100px",cursor:"pointer"}} >Add to cart</button>
         <p style={{marginTop:"20px"}}><b>Category : </b>{details.category}</p>
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
  )
}

export default Products
