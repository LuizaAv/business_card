import React, {useState} from "react";
import "./maincontent.css";


import pdf from "./curriculumvitae.pdf"

export default function MainContent(){
    

    return(
        <div className="contentContainer">
            <div className="aboutContainer">
                <header>
                    <h3>About</h3>
                </header>
                <span>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I always looking for new things to learn.
                </span>
            </div>
            <div className="interestsContainer">
                <header>
                    <h3>Interests</h3>
                </header>
                <span>
                Music scholar. Reader. Entrepreneur. Traveling lover. Coffee fanatic.
                </span>
            </div>
            <div className="cv">
                <a href={pdf} target="_blank">For more information check my <u>CV</u> please.</a>
            </div>
        </div>
    )
}