import React from "react";

function Banner({ image, text }) {
    return (
        <div className="banner">
            <h1 className="bannerText">{text}</h1>
        </div>
    )
}

export default Banner;