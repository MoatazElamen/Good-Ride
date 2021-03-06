import React from 'react'
import "./ComStyles/Chairs.css"
import minus from '../assets/-@2x.png'
import plus from '../assets/+.png'
import little from "../assets/Image -1.png"
import Path from '../assets/Path.png'

export default function Chairs() {
    return (
        <div className="chairs">
            <div className="chairs-container">
            <div className="chairs-headers">
                <div className="chairs-showen-header">CHAIR HALS</div>
                <div className="chairs-hidden-header"> <div className=""> AUCTION </div></div>
            </div>
            <div className="chairs-imgs">

            </div>
            <div className="chairs-footer">
                <div className="chairs-footer-title">
                Reserve price
                </div>
                <div className="chairs-footer-price">1.390,00 USD</div>
                <div className="chairs-footer-bidnow">
                    <div className="chairs-bidnow-text"><a href="/"> BID NOW</a></div>
                    <div className="chairs-bidnow-background"></div>
                    </div>
                <div className="chairs-footer-register"><a href="/">Register to bid! </a></div>
            </div>
            </div>
            <div className="chairs-plus-minus-container">

                <div className="chairs-minus"><img src={minus} alt=""/></div>
                <div className="chairs-plus"><img src={plus} alt=""/></div>
            </div>
                <div className="chairs-relative-container">

                <div className="chairs-filling-container">
       

                <div className="chairs-filling-inminus filling-item">
                <div className="chairs-inminus-filling-text"> _____________</div>
                    <div className="chairs-inminus-filling-img"><img src={little} alt=""/></div>
                    
                    <div className="chairs-inminus-filling-clock"> <div className="clock-img">
                    <img src={Path} alt=""/>
                        </div> <div className="clock-text"> TIMED auction </div> </div>
                    </div>
                    <div className="chairs-filling-middle filling-item">
                      
                        <div className="chairs-inmiddle-filling-img"> <img src={little} alt=""/></div>
                        
                    </div>

                    <div className="chairs-filling-inplus filling-item">
                    <div className="chairs-inplus-filling-text">
                        <div className="">
                        4 days 7 hours
until bidding ends on first lot
                        </div>

                    </div>
                        <div className="chairs-inplus-filling-img"> <img src={little} alt=""/> </div>
                  
                        <div className="chairs-inplus-filling-line">
                           <div className="">_____________</div>     
                        </div>
                    </div> 
                </div>
                </div>
          
          

        </div>
    )
}
