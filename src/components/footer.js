import React from 'react'
import "../styles/footerstyles.css"


import { FaHome, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa"
import { FiMail } from "react-icons/fi"


const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <div><FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                    </div>
                    <div>
                        
                    <p>Flat no. 102, Dhumravarna Apartment sharda nagar, Nanded</p>
                    <p>India</p>
                    </div>
                </div>
                <div>

                
                </div>
                <div className='phone'>
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                <h4>9518399661</h4>
                </div>
                
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>This is yash darshankar .I am a student in MGM's college of engineering and I am very good at web development</p>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/yash-darshankar-00b782227'><FaLinkedin size={50} style={{color:"white",marginRight:"2rem"}}/></a>
                    <a href='https://www.linkedin.com/in/yash-darshankar-00b782227'><FaInstagram size={50} style={{color:"white",marginRight:"2rem"}}/></a>
                    <a href="mailto:yashhdarshankar@gmail.com"><FiMail size={50} style={{color:"white",marginRight:"2rem"}}/></a> 
                

                
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default footer