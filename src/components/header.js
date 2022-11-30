import avatar from "./pic.jpg"
import "./header.css"
import React from "react"

export default function Header(){

    return(
        <div className="imgContainer">
            <img src={avatar} className="avatar"/>
            <h2>Luiza Avetisyan</h2>
            <h4>Frontend Developer</h4>
            <h6 className="mail">l.avetisyan7777@gmail.com</h6>
            <h6 className="phoneNumber">Phone num: 37498550027</h6>
        </div>
    )
}