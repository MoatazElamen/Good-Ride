import React,{useState,useEffect} from 'react'
import cityscape from "../assets/cityscape_02@2x.png"
import Car from "../assets/img_car.png"
import CustomCarousel from './CustomCarousel'
import x from "../assets/x.png"

  

export default function Banner() {
    const properties =[["12v Battery" , "5 Speeds" , "adjustable seats" ,"led lights"],["8v Battery" , "6 Speeds" , "adjustable seats" ,"led lights"],["12v Battery" , "5 Speeds" , "adjustable seats" ,"led lights"]]

    return (
        <div className="banner">
            <CustomCarousel cars={[Car,Car,Car]} licenses={["Licensed Car","Hello","Wello"]} titles={["Good like nobody else","Fast Like Thunder","Stronger than Stones"]} 
            discreptions={["Battery-powered Ride-on Car","75 Horse Power Engine","Fron 0k/h to 100 in 5 sec"]}
            properties={properties}
            />
            <img src={x} alt="x" style={{position:"absolute",left:"200px",top:"0px",zIndex:-2,width:"300px",height:"300px"}}/>
            <img src={x} alt="x" style={{position:"absolute",right:"250px",top:"100px",zIndex:-2,width:"150px",height:"150px",transform:"rotate(30deg)"}}/>
            <div className="number"></div>
        </div>

        
    )
}
