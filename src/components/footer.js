import "./footer.css"
import React from "react";
import twitterAvatar from "./twitter.png";
import facebookAvatar from "./facebook.png";
import instagramAvatar from "./instagram.png";

export default function Footer(){

    const twitterAvatarClick = () => {
        window.open("https://twitter.com/LAvetisyan7", "_blank")
    }

    const facebookAvatarClick = () => {
        window.open("https://www.facebook.com/luiza.avetisyan", "_blank")
    }

    const instagramAvatarClick = () => {
        window.open("https://www.instagram.com/louisa_avetisyan/", "_blank")
    }

    return(
        <div className="footerContainer">
            <div className="avatarContainer">
                <img src={twitterAvatar} onClick={twitterAvatarClick}/>
                <img src={facebookAvatar} onClick={facebookAvatarClick}/>
                <img src={instagramAvatar} onClick={instagramAvatarClick}/>
            </div>
        </div>
    )
}