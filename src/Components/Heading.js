import "./ComStyles/Header.css"
import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import "./ComStyles/Header.css"
export default function Heading() {
    return (
        <div className="heading">

            <Navbar/> 
            <Banner/>
        </div>
    )
}
