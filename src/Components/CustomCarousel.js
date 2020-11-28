import React ,{useState,useEffect}from 'react'
import "./ComStyles/Carousel.css"
const Img = (props)=>{
    return(
        <img  src={props.car} id={props.index} alt="img"/>
    )
}

const Text = (props)=>{
    const [propo,setpropo] = useState([])
        const prop= props.properties
    useEffect(()=>{
        setpropo(prop)
    },[prop])
    return(
        <div>
<div className="carousel-license">{props.license}</div>
    <div className="carousel-title">{props.title}</div>
    <div className="carousel-description">{props.description}</div>
    <div className="properties">
        {propo && propo.map((pro,index)=>( <div className="" key={index}> {pro} </div>)
        )}
    

    </div>
</div>

    )

}
export default function CustomCarousel(props) {
    const [imgsarr,setImgsarr] = useState([])
    const [licenses,setLicenses] = useState([])
    const [titles,setTitles] = useState([])
    const [properties,setProperties] = useState([])
    const [discreptions,setDiscreptions] = useState([])
    const [index,setIndex] = useState(0)
    useEffect(()=>{
        setImgsarr(props.cars)
        setProperties(props.properties)
        setDiscreptions(props.discreptions)
        setLicenses(props.licenses)
        setTitles(props.titles)
        console.log("hello")
    },[props.cars,props.discreptions,props.properties,props.licenses,props.titles])
    const Handleindexinc = ()=>{
        console.log(index)
        if(index<imgsarr.length-1){
            setIndex(index+1)
        }else{
            setIndex(0)
        }
    }
    const HandleindexDec = ()=>{
        console.log(index)
        if(index>0){
            setIndex(index-1)
        }else{
            setIndex(imgsarr.length-1)
        }  
    }
    return (
        <div className="custom-carousel">
            <div className="carousel-img">
            <Img car={imgsarr[index]} />
            <a href="/" className="carousel-buynow"> <div >Buynow </div></a>
            </div>
            <div className="carousel-controls">
                <div className="next" onClick={HandleindexDec}  ><i className="fa fa-caret-right leftone" style={{transform:"rotate(180deg)",position:"relative",right:"2px"}}></i></div>
                <div className="prev" onClick={Handleindexinc} ><i className="fa fa-caret-right rightone" ></i></div>
            </div>
            <div className="carousel-text">
                <Text license={licenses[index]} title={titles[index]} properties={properties[index]} index={index} description={discreptions[index]}/>
            </div>
            <div className="carousel-footer"><div className="carousel-social"><div className="facebook"><i className="fa fa-facebook"></i></div> <div className="instagram"><i className="fa fa-instagram"></i></div><div className="youtube"><i className="fa fa-youtube"></i></div></div> <div className="carousel-sell"> PAYMENT BY COD, INTERNET BANKING OR CARD</div><div className="carousel-number">0{index+1}</div></div>

        </div>
    )
}
