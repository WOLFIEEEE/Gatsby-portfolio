import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
export default ({data}) => {
  const {allStrapiProjects:{nodes:projects}}=data
  
  return <Layout>
    <SEO title="Home" description="this is our home page" />
    
    <Hero/>
    <Projects  projects={projects} title="Main Projects" showLink/>
  </Layout>
}
export const query = graphql`
  {
    allStrapiProjects(filter: {Featured: {eq: true}}) {
      nodes {
        github
        id
        desc
        title
        url
        Image {
          childImageSharp {
            fluid {
             ...GatsbyImageSharpFluid
            }
          }
        }
        Technologies {
          id
          title
        }
      }
    }
  }
`

