import React from 'react'
import "./footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='ttle'>
        <h2>ShopKeep</h2>
        <p> &#169; Copyright By Vinay Pratap. All rights are reserved</p>
        <img src="/img/pay.png" alt="" />
      </div>
      <div className="social">
      <i class="fa-brands fa-xl fa-github"></i>
      <i class="fa-brands fa-xl fa-twitter" style={{color:"#00acee"}}></i>
      <i class="fa-brands fa-xl fa-instagram" style={{color:"#cd486b"}}></i>
      <i class="fa-brands fa-xl fa-linkedin" style={{color:"#0A66C2"}}></i>
      <i class="fa-sharp fa-xl fa-solid fa-envelope" style={{color:"#C71610"}}></i>
      </div>
      <div className='location'>
      <h2>Locate us</h2>
      <p>Gumanpura,Kota,Rajasthan</p>
      <p>Phone : +91-1234567890</p>
      <p>email : singhvinaypratap761@gmail.com</p>
      </div>
      <div className="profile">
        <h2>Profile</h2>
        <p style={{cursor:"pointer"}}>Checkout</p>
        <p style={{cursor:"pointer"}}>My Account</p>
        <p style={{cursor:"pointer"}}>Ordere Tracking</p>
        <p style={{cursor:"pointer"}}>help & Support</p>
      </div>
      <div className="sub">
        <input type="text" placeholder='e-mail' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer
