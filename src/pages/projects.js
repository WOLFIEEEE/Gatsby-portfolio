import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) => {
  return <Layout>
    <section className="project-page">
      <Projects projects={projects} title="ALL projects"/>
    </section>
    <button type="submit" className="submit-btn btn">
              Click here to See Some of my Graphic design Manipulation
            </button>
  </Layout> 
  
}
export const query = graphql`
  {
    allStrapiProjects(filter: {}) {
      nodes {
        github
        id
        desc
        title
        url
        Image {
          childImageSharp {
            fluid {
              src
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
export default ProjectsPage
