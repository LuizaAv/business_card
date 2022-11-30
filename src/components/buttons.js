import React from "react";
import githubIcon from "./github.png";
import linkedInIcon from "./linkedInIcon.jpg";
import "./buttons.css";


export default function Buttons(){

    const linkedInBtnClick = () => {
        window.open("https://www.linkedin.com/in/luiza-avetisyan-7038aa17b/", "_blank")
    }

    const githubBtnClick = () => {
        window.open("https://github.com/LuizaAv", "_blank")
    }

    return(
        <div className="btnContainer">
            <button className="githubBtn" onClick={() => githubBtnClick()}>
                <img src={githubIcon} className="githubIconTag"/>
                Github
            </button>
           <button className="linkedInBtn" onClick={() => linkedInBtnClick()}>
                <img src={linkedInIcon} className="linkedIn"/>
                LinkedIn
           </button>
        </div>
    )
}