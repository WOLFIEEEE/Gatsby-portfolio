import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import { Link } from "gatsby"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) => {
  return <Layout>
    <SEO title="Project" description="My-project" />
    <section className="project-page">
      <Projects projects={projects} title="ALL projects"/>
    </section>
    <div className="textab">
      <Link to="/build" className="btn">
       Click to See my Graphic Design art gallary
      </Link>
      </div>
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
