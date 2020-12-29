import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import TextTransition, { presets } from "react-text-transition";
import SocialLinks from "../constants/socialLinks"
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

  const TEXTS = [
    "Software Engineer",
    "Front-End WebDev",
    "Graphic Desiner",
  ];
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
    });
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
            <h1 >i'm Khushwant</h1>
            <h3>
            <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
            </h3>
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