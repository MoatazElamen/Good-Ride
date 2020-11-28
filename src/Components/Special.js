import React from 'react'
import "./ComStyles/Special.css"
import img8 from "../assets/img-8.png"
import img7 from "../assets/img-7.png"
import bag from "../assets/Bag.png"
const Soffer = (props)=>{
    return(
        <div className="S-offer">
            <div className="S-offer-img"> {props.discount && <div className="S-props-discount"> {props.discount}</div>}
                <img src={props.img} alt="/"/>
            </div>
            <div className="S-offer-body">
    <div className="S-offer-title">{props.title}</div>
   {props.description &&<div className="S-offer-description">{props.description}</div> }
   {props.list && <div></div>}
    {props.list &&  <div className="S-offer-list">
        <div className="S-offer-list-item">
            <img src={bag} alt=""/>
        </div>
        <div className="S-offer-list-item">
            <i className="fa fa-search"></i>
        </div>
        <div className="S-offer-list-item">
            <i className="fa fa-heart-o"></i>
        </div>
        
        </div>}
    <div className="S-offer-price">{props.price}</div>
            </div>
        </div>
    )
}
export default function Special() {
    return (
        <div className="Special-offer">
            <div className="special-header">
        <div className="special-header-title">SPECIAL OFFER</div>
        <div className="special-header-right">
            <div className="special-header-kitchen"><a href="/">kitchen </a></div> 
            <div className="specail-header-tools"><a href="/"> Tools</a></div>
            <div className="special-header-children"><a href="/"> Children's corner </a></div>
            </div>
            </div>
            <div className="special-body">
            <Soffer title="Chef Master Kitchen 400W" img={img7} price="1.390.00 KN" description="6-Volt Battery Operated Ride-On Car"/>
            <Soffer title="Chef Master Kitchen 400W" img={img8} discount="35%" price="1.390.00 KN" description="6-Volt Battery Operated Ride-On Car"/>
            <Soffer title="Chef Master Kitchen 400W" img={img7}   list={true} />
            <Soffer title="Chef Master Kitchen 400W" img={img8} discount="15%"  description="6-Volt Battery Operated Ride-On Car" price="1.390,00 kn" />
            </div>
            <div className="special-footer">
                <div className="special-footer-text"><a href="/">Review the intire offer</a> </div>
                <div className="special-footer-background"></div>
            </div>
        </div>
    )
}