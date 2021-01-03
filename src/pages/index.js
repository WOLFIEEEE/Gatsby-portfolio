import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Welcome from 'react-welcome-page'
export default ({data}) => {
  const {allStrapiProjects:{nodes:projects}}=data
  return (
    <div>
    <Welcome
            loopDuration={1000} 
            data={
                [
  {
    "backgroundColor": "rgb(14, 14, 14)",
    "textColor": "#B2B2B2",
    "text": "cdscsdc",
    "image": "https://guides.github.com/features/issues/labels.png" 
  },
  {
    "backgroundColor": "rgb(24, 14, 12)",
    "textColor": "#EEE6DF",
    "text": "csdcds",
    "image": "https://guides.github.com/features/issues/labels.png"
  }
]
            }
        />
    

  <Layout>
    <SEO title="Home" description="this is our home page" />
    
    <Hero/>
    <Projects  projects={projects} title="Main Projects" showLink/>
  </Layout>
  </div>

);
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

