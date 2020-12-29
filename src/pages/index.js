import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
export default ({data}) => {
  const {allStrapiProjects:{nodes:projects}}=data
  return <Layout>
    <Hero/>
    <Projects projects={projects} title="Main Porjects" showLink/>
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

