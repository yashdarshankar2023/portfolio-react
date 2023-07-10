import "../styles/heroimagestyles.css";
import React from 'react'
import  Image1  from "../assets/portfolio5.png";


const Home = () => {


  return (

    <div className="hero">
        <div className="mask">
            <img className="image" src={Image1} alt="Image1"/>

        </div>
        <div className="content">
            <p> Hi , I am yash darshankar</p>
            <h1>Web Developer / Software Developer</h1>

        
        </div>
    </div>
  )
}

export default Home