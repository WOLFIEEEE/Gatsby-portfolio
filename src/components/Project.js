import React from "react"
import PropTypes from "prop-types"
import Imag from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({desc,title,url,github,Image,Technologies}) => {
  return( 
  <article className="project">
    <Imag fluid={Image.childImageSharp.fluid}
    className="project-img"/>
    <div className="project-info">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="project-stack">
        {
          Technologies.map(item=>{
            return <span key={item.id}>{item.title}</span>
          })
        }
      </div>
      <div className="projec-links">
        <a href={github}>
          <FaGithubSquare className="project-icon"/>
        </a>
        <a href={url}>
          <FaShareSquare className="project-icon"/>
        </a>
      </div>
    </div>
  </article>
  );
}
  

Project.propTypes = {
  title:PropTypes.string.isRequired,
  github:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  Image:PropTypes.object.isRequired,
  Technologies:PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
