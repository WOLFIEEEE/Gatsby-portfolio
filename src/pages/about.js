import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Imag from "gatsby-image"
import { FaAngleDoubleRight } from "react-icons/fa"
// ...GatsbyImageSharpFluid
const About = ({data:
  {about:{nodes},
}}) => {
  const { about, Tech, Int, Image,title } = nodes[0]
  return (
<Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Imag fluid={Image.childImageSharp.fluid} className="about-img" />


          <article className="about-text">
            <Title title={title} />
            <p>{about}</p>
            <article className="job-info">
          {Int.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.interest}</p>
              </div>
            )
          })}
        </article>

        
            <div className="about-stack">
              {Tech.map(item => {
                return <span key={item.id}>{item.title}</span>
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