import React from 'react'
import "./card.scss"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/shopSlice';
import { ToastContainer,toast } from 'react-toastify'
const Card = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) =>{
    return String(_id).toLowerCase().split(" ").join("");
  }
  const rootId = idString(_id);
  const handleDetails=()=>{
    navigate(`/product/${rootId}`,{
      state:{
        item: product,
      },
    })
  }
  return (
    <div className='card'>
     <div className='set' onClick={handleDetails}>
        <img src={product.image} alt="image" />
     </div>
      <div style={{width:"100%",marginTop:"10px" ,display:"flex",gap:"5",flexDirection:"column"}}>
        <span style={{marginBottom:"3px"}}>{product.title}</span>
        <p><b>Price :</b> ${product.price}</p>
        <p><b>Category :</b> {product.category}</p>
      </div>
      <button onClick={()=>dispatch(addToCart({
         _id:product._id,
         title: product.title,
         image: product.image,
         price: product.price,
         quantity: 1,
         description: product.description,
         
      })
      ) & toast.success(`${product.title} is added`)
      } style={{cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"gray",padding:"10px 10px",margin:"20px",border:"1px solid black",boxShadow:"0px 3px 3px -2px rgba(0,0,0,0.5)"}}>
        Add to cart</button>
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

export default Card
