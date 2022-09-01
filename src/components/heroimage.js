import "./heroimagestyles.css";
import React from 'react'
import  Image1  from "../assets/portfolio5.png";
import { Link } from "react-router-dom";

const heroimage = () => {


  return (

    <div className="hero">
        <div className="mask">
            <img className="image" src={Image1} alt="Image1"/>

        </div>
        <div className="content">
            <p> Hi , I am yash darshankar</p>
            <h1>Web Developer</h1>

        
        </div>
    </div>
  )
}

export default heroimage
