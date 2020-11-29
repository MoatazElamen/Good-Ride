import React from 'react'
import "./ComStyles/Footer.css"
import woman from '../assets/img@2x.png'
import x from '../assets/x.png'
import cityscape from "../assets/cityscape_02@2x.png"
export default function Footer() {
    return (
        <div className="footer">

        
            <div className="footer-container">
            <div className="box1 footer-box">
                <div className="box1-text">
                <div className="sendgift">
                    SEND A GIFT
                </div>
                <div className="tofriend">
                    To A Friend
                </div>
                
                <div className="box1-footer-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                </div>
                
                <div className="givevoucher">
                    <a href="/"> GIVE A VOUCHER!</a>
                </div>
                </div>
   

                <div className="footer-box1-img">
                <img src={woman} alt=""/>
                </div>
            </div>
            <div className="box2 footer-box">
                <div className="box2-footer-text">
                <a href="/"> <p>SUPPORT</p></a>   
                  <a href="/"><p>PAYMENT METHODS  </p></a>  
                 <a href="/"><p>Delivery methods
</p></a>   
                 <a href="/"><p>Postage and shipping
</p></a>   
               <a href="/">  <p>Returns and complaints
</p></a>    
               <a href="/"> <p>Wholesale</p> </a>    
               <a href="/">  <p>Privacy policy
</p></a>    
                 <a href="/"> <p>Cookie policy
</p></a>   
                 <a href="/"> <p>User registration
</p>  </a>   
               <a href="/">  <p>Terms of use</p> </a>    
                </div>
              
            </div>
            <div className="box3 footer-box">
                    <div className="goodride-footer-logo">
                        <div className="good-ride">Good-Ride</div>
                        <div className="footer-shop">SHOP</div>
                    </div>
                    <div className="footer-social">
                        <div className="footer-facebook">
                            <i className="fa fa-facebook"></i>
                        </div>
                        <div className="footer-instagram">
                            <i className="fa fa-instagram"></i>
                        </div>
                        <div className="footer-youtube">
                            <i className="fa fa-youtube"></i>
                        </div>
                    </div>
                    <div className="footer-menu">
                    <a href="/"><p>ABOUTUS</p></a>
                    <a href="/"><p>blog</p></a>
                    <a href="/"><p>general conditions</p></a>
                    <a href="/"><p>Good-ride CLUB</p></a>
                    <a href="/"><p>CONTACT</p></a>
                    <a href="/"><p>imprint</p></a>
                    <a href="/"><p>complaints and objections</p></a>
                    </div>
                    <div className="goodride-copyrights">
                        <div className="copyrights">
                        Copyright 2019. All Rights Reserved
                        </div>
                        <div className="doneby">
                        Crafted with love by EA93
                        </div>
                    </div>
            </div>
            <div className="box4 footer-box">
                <div className="newsLetter">
                    NEWSLETTER
                </div>
                <div className="newsletter-title">
                You want extra
discounts?
                </div>
                <div className="newsletter-body">
                Read more about the processing of your personal data on the PRIVACY POLICY page.
                </div>
                <div className="newsletter-form">
                    <input type="text" name="news-letter" placeholder="E-mail"  style={{width:'100%'}} id=""/>
                </div>
                <div className="newsletter-10usd">
                    <div className="tenusd">
                        10 <sup>USD</sup>
                    </div>
                    <div className="tenusd-text">
                    Get a 10USD discount by subscribing to our MASOHIstic newsletter!
                    </div>
                </div>
            </div>
            <div className="box5 footer-box">
            <div className="footer-x-img">
            <img src={x} alt=""/>
            </div>
            </div>
            </div>
            <div className="footer-background">
            <div className="footer-buildings-background">
                <img src={cityscape} alt=""/>
            </div>
                <div className="footer-stunned-background"></div>
               
            </div>
        </div>
    )
}
