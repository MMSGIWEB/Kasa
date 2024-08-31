import React from "react";
import Image1 from "../assets/images/banner/Image1.png"


function Banner({ image, text }) {
    return (
        <div className="banner">
            <img className="bannerImg" src={image} alt="bannière" />
            <div className="darkenBanner"></div>
            <span className="bannerText">{text}</span>
        </div>
    )
}

export default Banner;