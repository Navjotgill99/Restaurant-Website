import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Bringing you an unforgettable dining experience with a perfect blend of taste, quality, and ambiance. Your satisfaction is our priority.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-506-993-0226</li>
                <li>contact@dine&delight.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> &copy; 2024 Dine&Delight.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
