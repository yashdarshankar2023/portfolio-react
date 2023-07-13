import "../styles/homestyles.css";
import React from 'react'
import  Image1  from "../assets/portfolio5.png";


const Home = () => {
  const redirectToResume = () => {
    window.open('https://drive.google.com/file/d/1FvdLCNRHZ4FMF4nMuFBIVY_qzEZ49Sh6/view?usp=sharing', '_blank');
  };

  const redirectToContact = () => {
    window.open('https://hospital-project-bmi1.onrender.com/', '_blank');
  };


  return (

    <div className="hero">
        <div className="mask">
            <img className="image" src={Image1} alt="Image1"/>

        </div>
        <div className="content">
            <p> Hi , I am yash darshankar</p>
            <h1>Web Developer / Software Developer</h1>
            <br/><br/>
          
            <a><button onClick={redirectToResume}>Download Resume</button></a>
            <a href="mailto:yashhdarshankar@gmail.com"><button>Contact me</button></a>


        
         


        
        </div>
    </div>
  )
}

export default Home