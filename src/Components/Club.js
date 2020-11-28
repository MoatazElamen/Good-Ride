import React from 'react'
import "./ComStyles/Club.css"
import Bag from "../assets/bag@2x.png"
import Car from "../assets/shutterstock_-1.png"
import x from '../assets/x.png'
export default function Club() {
    return (
        <div className="club">
                        <div className="club-item club-left left">
                            <div className="club-item-grid-left">
                            <div className="club-item-left-header club-item-header">
                WHOLESALE USER?
                </div>
       
                <div className="club-left-text club-text">
                Do you have a company and need to buy a larger quantity of products?
Register and log in as a wholesale user and secure access to a special part of the store.
                </div>
                <div className="club-register">
                <a href="/">REGISTER</a> 
                </div>
                            </div>
                            <div className="club-left-imgs">
                            <img src={Car} className="car-img"  alt=""/>
                            <img src={x} className="x-img" alt=""/>
                            
                            </div>
        
            </div>
            <div className="club-item club-right">
                <div className="club-item-grid-right">
                <div className="club-item-right club-item-header">
            <img src={Bag} alt=""/>    GOODRIDE CLUB
            </div>
            <div className="club-item-right-subheader club-item-subheader">
            Join our benefits club.
            </div>
            <div className="club-right-text club-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estemated. 
            </div>
            <div className="club-find-more"><a href="/"> FIND OUT MORE</a></div>
                </div>
            <div className="club-sutisfied">
                <div className="club-sutisfied-number"> <div className="num">  46.948</div></div>
                <div className="club-sutisfied-text"><a href="/">Sutisfied</a> </div>

            </div>
            </div>

        </div>
    )
}
