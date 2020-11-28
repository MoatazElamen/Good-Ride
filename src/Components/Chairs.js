import React from 'react'
import "./ComStyles/Chairs.css"
import minus from '../assets/-@2x.png'
import x from '../assets/x.png'
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
                <div className="chairs-relative-container">
                <div className="chairs-minus"><img src={minus} alt=""/></div>
                <div className="chairs-plus"><img src={x} alt=""/></div>
                <div className="chairs-filling-container">
                    <div className="chairs-filling-inplus">
                        <div className="chairs-inplus-filling-line"></div>
                        <div className="chairs-inplus-filling-img"></div>
                        <div className="chairs-inplus-filling-text"></div>
                    </div>

                    <div className="chairs-filling-middle">
                      
                        <div className="chairs-inmiddle-filling-img"></div>
                        
                    </div>
                    <div className="chairs-filling-inminus">
                    <div className="chairs-inminus-filling-clock"></div>
                    <div className="chairs-inminus-filling-img"></div>
                    <div className="chairs-inminus-text"></div>
                   
                    </div>
                </div>
                </div>
          
            </div>

        </div>
    )
}
