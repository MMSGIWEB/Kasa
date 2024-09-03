import React from "react";

function Banner({ image, text }) {
    return (
        <div className="banner">
            <span className="bannerText">{text}</span>
        </div>
    )
}

export default Banner;