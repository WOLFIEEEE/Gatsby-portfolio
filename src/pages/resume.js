import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import "../css/resume.css"
import photo from "../assets/photo.png"


const resume = () => {

  return<Layout>
    <div>
  <div id="inner-nav" />
  <div id="container">
    <div id="profile">
      <div id="image">
        <img id="profile-photo" src={photo} alt="Profile-Image" />
      </div>
      <p id="name">Khushwant Parihar<br /><span id="email">kgpkhushwant1@gmail.com</span></p>
      <p id="designation">Software Engineer<br /><span id="college">Chandigarh University,Punjab, India</span></p>
      <div id="social-links"><a href="#"><i className="fab fa-facebook-f stroke-transparent" /></a><a><i className="fab fa-twitter stroke-transparent" /></a><a><i className="fab fa-linkedin-in stroke-transparent" /></a><a><i className="fab fa-github stroke-transparent" /></a></div>
      <hr width="100%" />
      <div id="about">
        <p style={{display: 'inline'}}>About</p>
        <a href="#"><i className="fas fa-pen stroke-transparent-blue" /></a>
      </div>
      <p id="year-graduation">Expected Year of Graduation<br /><strong>March, 2022</strong></p>
      <p id="education">Education<br /><strong>Chandigarh University, Punjab</strong></p>
      <p id="more-about">More about me<br /><span> Computer Science &amp; Engineering Department</span></p>
      <p id="telephone">Telephone<br /><strong>+91 8290938303</strong></p>
    </div>
    <div id="info-cards">
      <div className="card">
        <p><i className="fas fa-briefcase stroke-transparent" />&nbsp;&nbsp;&nbsp;Projetcs</p>
        <ul>
          <li><p className="tags">Github Dashboard (12/2020 - 12/2020)<br /><span><span>Learnig to use api request</span>
 | <span>Visualizing data gathered from api's</span></span><br/> <span>Technology Used:- React js(for Frontend) , Auth0(for Auth)</span></p>
          </li>
          <li><p className="tags">Anime - recommendation (01/2021 - 01/2021)
<br /><span><span>Learned to use of cosine similarity</span> | <span>It's just a model I still haven't learned how to use this in production</span></span><br/>
<span>Technology used:- Python and it's libraries(pandas,numpy,sklearn)</span></p>
        </li>

        
        <li><p className="tags">My-portfolio (12/2020 - 12/2020)<br />
        <span>
          <span>Learned to build a static website using gatsby.js</span> |
           <span>Learning the use of strapi as a backend</span>
           </span><br/>
<span>Technology used:- Gatsby.js , Strapi</span>
</p>
        </li>


        <li><p className="tags">Corona tracker(React-Web App) (11/2020 - 11/2020))<br />
        <span>
          <span>A react web application which visualize the data which we retrieve by an API.</span> |
           <span>Learned to implement hooks</span>
           </span><br/>
<span>Technology used:- React.js , MaterialUT</span>
</p>
        </li>


        <li><p className="tags">Path Finding Visualizer (06/2020 - 09/2020)
<br />
        <span>
          <span>Made using pygames</span> |
           <span>got to learn about pygame library</span>
           </span><br/>
<span>Technology used:- Python ,Pygames</span>
</p>
        </li>
        </ul>
      </div>
      <div className="card">
        <p><i className="fas fa-briefcase stroke-transparent" />&nbsp;&nbsp;&nbsp;Education</p>
        <ul>
          <li><p className="tags">Chandigarh University, Punjab<br /><span>B.tech | Computer Science</span><br/><span>Graduation: 2022| Average CGPA:- 7.3</span></p>
            <a className="edit" href="#"><i className="fas fa-pen stroke-transparent-blue" /></a></li>
          
            <li><p className="tags">PRJ Gyanjaya, Beawar, Rajasthan<br /><span>Stream :  Science Mathematics</span><br/><span>Graduation: 2017| Percentage:- 85.60%</span></p>
            <a className="edit" href="#"><i className="fas fa-pen stroke-transparent-blue" /></a></li>

        </ul>
      </div>
      <div className="card">
        <p><i className="fas fa-graduation-cap stroke-transparent" />&nbsp;&nbsp;&nbsp;Acheivments</p>
        <ul>
          <li><p className="tags">5* C++ coder in hackerrank</p>
    </li>
    <li><p className="tags">3* Competitive coder on codecehf</p>
    </li>
    <li><p className="tags">1000+ rating on codeforces</p>
    </li>
        </ul>
      </div>
    </div>
  </div>
</div>



  </Layout> }

export default resume
