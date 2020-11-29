import React from 'react'
import "./ComStyles/FromBlog.css"
import img10 from '../assets/i10.png'
import img11 from '../assets/i11.png'
import cas from '../assets/img-9.png'
import x from '../assets/x.png'
const RightItem = (props)=>{

    return(
        <React.Fragment>
            <div className="fromblog-right-item-img">
                
                <img src={props.img} alt=""/>
            </div>
            <div className="fromblog-right-item-text">
                <div className="FRIT-header">
                    {props.header}
                </div>
                <div className="FRIT-text">
                    <div className="">
                    {props.text}
                    </div>
                  
                </div>
            </div>
        </React.Fragment>
    )
}
export default function FromBlog() {
    return (
        <div className="fromblog">
                <div className="fromblog-container">
                    <div className="fromblog-header">FROM THE BLOG</div>
                    <div className="fromblog-initial"> 
                    <div className="fromblog-left">
                        <div className="fromblog-left-item">
                        <img src={x} className="x-img" alt=""/>
                            <img src={cas} className="cas-img" alt=""/>
                          
                        </div>
                        <div className="fromblog-left-item">
                        <div className="fromblog-left-text">
                                    <div className="fromblog-left-title">
                                    An ideal gift for wine lovers and collectors
                                    </div>
                                    <div className="fromblog-left-description">
                                    If you choose wine by food, the basic rules say that white wines go well with fish, chicken, salads and pasta.
                                    </div>
                                    <div className="fromblog-left-link">
                                    <a href="/ ">FIND OUT MORE</a> 
                                    
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="fromblog-right">
                        <div className="fromblog-right-top fromblog-right-item "> 
                        <RightItem img={img10} header="An ideal gift for car lovers and collectors" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore" />
                         </div>
                        <div className="fromblog-right-bottom fromblog-right-item" >
                        <RightItem img={img11} header="An ideal gift for car lovers and collectors" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore" />
                        </div>
                    </div>
                       
                    </div>
                </div>
        </div>
    )
}
