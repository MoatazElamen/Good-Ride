import  "./ComStyles/Navbar.css"
import React from 'react'
import img from '../assets/img.png'
export default function Navbar() {
    return (
        <div>
            <div className="navbar">
            <div className="navbar-left nav-item">
            <button className="active">PRODUCTS</button>
                <button className="disable" >CONTACT</button></div>
            <div className="navbar-middle nav-item"><div className="brand"><div className="badass">GOOD RIDE</div><div className="navbar-shop">SHOP</div>
            <div className="badass-search"><input type="search" name="search" id="search" placeholder="Search _" autoComplete="off" /> <i className="fa fa-search navbar-search-fontawesome"></i> </div></div></div>
            <div className="navbar-right nav-item"><a href="/" className="b2b">B2B</a>
            <a href="/" className="click">CLICK & COLLECT</a>
            <a href="/" className="login">LOGIN</a>
            <div className="img-circle"><img src={img} alt=""/></div>
            </div>
            </div>
 
        </div>
    )
}
