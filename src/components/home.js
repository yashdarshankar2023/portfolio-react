import "../styles/homestyles.css";
import {React} from 'react'
import  Image1  from "../assets/portfolio5.png";


const Home = () => {
  const redirectToResume = () => {
    window.open('https://drive.google.com/file/d/1J0Pnk2kaJAsmnZ91Ko9ZrHLhmZrR2R9y/view?usp=sharing', '_blank');
  };

  const redirectToContact = () => {
    window.open('mailto:yashhdarshankar@gmail.com', '_blank');
  };

  return (
    <section className="hero">
        <div className="mask">
            <img className="image" src={Image1} alt="Image1"/>
        </div>
        <div className="content">
            <h1><span> Hi , I am yash darshankar</span> <br/> Web Developer / Software Developer</h1>
            <button onClick={redirectToResume}>Download Resume</button>
            <button onClick={redirectToContact}>Contact Me</button>
        </div>
    </section>
  )
}

export default Home