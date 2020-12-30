import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import build from "../assets/build.gif"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../css/build.css"
const Error = () => {
  return<Layout>
    <SEO title="Build page" />
      <img src={build} alt="Paris" className="centergif"/>
      <div className="textab">
      <AniLink paintDrip to="/" className="btn">
        Go to Page 4
     </AniLink>
      </div>
      
      <h3 className="texta">(Build in progress should be available soon)</h3>
  </Layout> }

export default Error
