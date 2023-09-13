import React from 'react'
import "../styles/skills.css"


const skill = () => {

  const redirectToCertificate1 = () => {
    window.open('https://drive.google.com/file/d/1mlO1Gt3tzHE34mjpoi38ybQ0gTs3pffU/view?usp=sharing', '_blank');
  };

  const redirectToCertificate2 = () => {
    window.open('https://drive.google.com/file/d/11pv1225pBjwLrZ8eBiAs8FfhMxtrBHcg/view?usp=sharing', '_blank');
  };


  const redirectToCertificate3 = () => {
    window.open('https://www.hackerrank.com/yashdarshankar?hr_r=1', '_blank');
  };

  return (
    <section className='Skills_Container'>

      <h1>Skills</h1>
      <div className='college_course'>

        <div className='course_box'>

          <h2>Certifications</h2>

          <table>
            <tr>
              <td><li>python programmer certification</li></td>
              <td><button onClick={redirectToCertificate1}>View</button></td>
            </tr>

            <tr>
              <td><li>The joy of computing using python</li></td>
              <td><button onClick={redirectToCertificate2}>View</button></td>
            </tr>

            <tr>
              <td><li>Hackerrank certifications</li></td>
              <td><button onClick={redirectToCertificate3}>View</button></td>
            </tr>

          </table>
        </div>
        <div className='skill_box'>
          <h2>Skills</h2>
          <li>Python</li>
          <li>HTML and CSS</li>
          <li>Javascript</li>
          <li>DBMS</li>
          <li>MERN Stack</li>
          <li>DSA</li>
        </div>

      </div>
    </section>
  )
}

export default skill