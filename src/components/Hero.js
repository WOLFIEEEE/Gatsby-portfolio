import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import TextLoop from "react-text-loop";
import "../css/text.css"
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h2 className="title" data-value="I'M Khushwant">
  I'M Khushwant
</h2>
               <TextLoop> 
                    <h3>Software Engineer</h3>
                    <h3>Front-end Dev</h3>
                    <h3>Graphic Designer</h3>
                </TextLoop>{" "}
            {/* adding a diiferent animation part on this  */}
      <div>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            </div>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero