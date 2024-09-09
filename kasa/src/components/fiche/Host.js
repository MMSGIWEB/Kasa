import React from "react";

function Host(props) {
    return (
        <>
            <div className="userInfo">
                <p className="userName">{props.userName}</p>
                <div className="userPic">
                    <img src={props.userPic} alt="userPicture" />
                </div>
            </div>
        </>
    )
}

export default Host