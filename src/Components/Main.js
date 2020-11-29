import React from 'react'
import Heading from './Heading'
import Offer from './Offer'
import Club from './Club'
import Special from './Special'
import Chairs from './Chairs'
import FromBlog from './FromBlog'
import Footer from "./Footer"
export default function Main() {
    return (
        <div className="main">
            <Heading/>
            <Offer/>
            <Club/>
            <Special/>
            <Chairs/>
            <FromBlog/>
            <Footer/>
        </div>
    )
}
