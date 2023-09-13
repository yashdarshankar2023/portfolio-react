import React from 'react'
import "../styles/education.css"

const education = () => {
  return (
    <div className='Education_Container'>
      <br/>
        
        <h1>Education</h1>
       
        <div className='education_box'>
         
          <table className='education_table'>
            <tr>
            <th> SR no</th>
            <th> Name of College</th>
            <th> Boards / Degrees</th>
            <th> Starting Date</th>
            <th> Ending Date</th>
            <th> CGPA / Percentage Obtained</th>
            
    

            </tr>
            <tr>
              <td>1.</td>
              <td>MGM's college of engineering, Nanded</td>
              <td>BTECH</td>
              <td>July 11,   2019</td>
              <td>Recently Completed</td>
              <td>8.66 CGPA</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Cambridge jr. College</td>
              <td>HSC</td>
              <td>June 11, 2018</td>
              <td>June 11, 2019</td>
              <td>62.46%</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Universal English Medium School</td>
              <td>SSC</td>
              <td>June 27, 2016</td>
              <td>June 27, 2017</td>
              <td>84.60%</td>
            </tr>
  
          </table>
          
        </div>

    </div>

        

  
  )
}

export default education