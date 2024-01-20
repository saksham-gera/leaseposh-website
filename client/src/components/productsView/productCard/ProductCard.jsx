import { useState } from "react";
import "./ProductCard.css"


export default function ProductCard({popupDisplay, imageURL}) {
    const [productProperties, setProductProperties] = useState({imageScale:1 , imageHeight:50, imageWidth:22.9, contentVisibility:"visible", ImageBorderRadius: "10px 10px 0 0"});
    return (
        <div className="product-card" onClick={() => {popupDisplay("flex",imageURL)}} onMouseOver={() => {setProductProperties((currScales) => {return {...currScales, imageScale:1.05, imageWidth:23.3,imageHeight:65, contentVisibility:"hidden", ImageBorderRadius: "10px 10px 10px 10px"} })}} onMouseLeave={() => {setProductProperties((currScales) => {return {...currScales, imageScale:1, contentVisibility:"visible", imageWidth:22.9,imageHeight:50 , ImageBorderRadius: "10px 10px 0 0"} })}}>
            <img src={imageURL} style={{transform: `scale(${productProperties.imageScale})`, width: `${productProperties.imageWidth}vw`,height: `${productProperties.imageHeight}vh`, borderRadius:`${productProperties.ImageBorderRadius}` }}></img>
            <div className="product-content" style={{visibility: `${productProperties.contentVisibility}`}}>
                <div className="product-brand">Siyaram's</div>
                <div className="product-title">Bride's Lehanga</div>
                <div className="product-rating">4/5</div>
                <div className="product-price">$25.32</div>
            </div>
        </div>
    );
}