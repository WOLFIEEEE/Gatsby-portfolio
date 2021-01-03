import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Imag from "gatsby-image"
import { FaAngleDoubleRight } from "react-icons/fa"
import SEO from "../components/SEO"
import Zoom from 'react-reveal/Zoom';

// ...GatsbyImageSharpFluid
const About = ({data:
  {about:{nodes},
}}) => {
  const { about, Tech, Int, Image,title } = nodes[0]
  return (
    
<Layout>
<SEO title="About" description="About Me" />
      <section className="about-page">
        <div className="section-center about-center">
          <Imag fluid={Image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p className="about-text">{about}</p>
            <article className="job-info">
          {Int.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p className="about-text">{item.interest}</p>
              </div>
            )
          })}
        </article>

        
            <div className="about-stack">
              {Tech.map(item => {
                return( 
                  <Zoom>
                <span key={item.id}>{item.title}</span>
                </Zoom>
              );
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        about
        Int {
          id
          interest
        }
        title
        Tech {
          id
          title
        }
        Image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
export default About