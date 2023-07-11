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
                 
                    <div>
                        
                    <p><FaHome size={20} style={{color:"white",marginRight:"2rem"}}/> Sharda nagar, Nanded, India - 431605</p>
                
                    </div>
                </div>
                <div>

                
                </div>
                <div className='phone'>
                
                <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>9518399661</h4>
                </div>
                <div className='phone'>
                
                <h4><FiMail size={25} style={{color:"white",marginRight:"2rem"}}/>yashhdarshankar@gmail.com</h4>
                </div>
                
                
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>Hello, I'm Yash Darshankar, a skilled web and software developer studying at MGM's College of Engineering. I have expertise in both web development and software development, covering front-end and back-end technologies. I'm currently seeking job opportunities to apply my skills and contribute to a company's success.I'm eager to grow as a developer and learn from experienced professionals. I'm confident in my abilities and excited to take on new challenges in the industry.  </p>
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