import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const productData = useSelector((state) => state.shop.productData)
  const userInfo = useSelector((state) => state.shop.userInfo)
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none"}}>
       <div className="t">ShopKeep</div>
       </Link>
       <div className="nav">
        <ul>
            <Link style={{textDecoration:"none",color:"black"}} to="/">
            <li>Home</li>
            </Link>
            <li>Pages</li>
            <li>Shop</li>
            <li>Element</li>
            <li>Blog</li>
            <Link style={{color:"black"}} to="/cart">
            <i class="fa-solid fa-cart-shopping" style={{marginTop:"5px",cursor:"pointer"}}>{productData.length}</i>
            </Link>
            <Link style={{color:"black"}} to="/login">
             <img style={{height:"25px",marginTop:"7px"}} src={userInfo ? userInfo.image : "/img/user.png"} alt="" />
            </Link>
            {/* {
              userInfo && <p>{userInfo.name}</p>
            } */}
        </ul>
       </div>
    </div>
  )
}

export default Header
