import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/logo.jpg"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" height={"50px"}/>
                <p>I'm a Automation Engineer from, Tamilnadu with hand's on experience in both frontend and backend technologies.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> © {year} Ranjith. All rights reserved </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer