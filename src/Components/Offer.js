import React from 'react'
import "./ComStyles/Offer.css"
import OfferCar from "../assets/img-1.png"
import x from "../assets/x.png"
const SingleOffer = ()=>{
    return (
        <div className="offer">
            <div className="offer-head">
                <img src={OfferCar} alt="offerCar"/>
            </div>
            <div className="offer-body">
                <div className="offer-title">BMW i8 Hybird Concept</div>
                
                <div className="offer-price">1.390.00 kn</div>
                <div className="offer-price-shadow"></div>
            </div>
        </div>
    )
}
export default function Offer() {
    return (
        <div className="offers"> 
        <div className="offers-title"> THE BEST FROM THE OFFER</div>
        <div className="offers-list">
        <SingleOffer/>
        <SingleOffer/>
        <SingleOffer/>
        <SingleOffer/>
        <SingleOffer/>
        </div>
        <div className="offers-footer"><a href=""> REVIEW THE ENTIRE OFFER</a></div>
        <img src={x} style={{position:"relative",width:"100px",bottom:"350px",right:"280px",zIndex:"0"}} alt="x"/>
        <img src={x} style={{position:"relative",width:"50px",left:"460px" ,bottom:"420px"}} alt="x"/>
        <img src={x} style={{position:"relative",width:"50px",right:"490px" ,bottom:"150px"}} alt="x"/>
        
        </div>
    )
}
