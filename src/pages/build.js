import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import build from "../assets/build.gif"
import "../css/build.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Error = () => {

  return<Layout>
    <SEO title="Build page" />
      <img src={build} alt="Paris" class="centergif"/>
      <div className="textab">
      <AniLink paintDrip to="/" className="btn">
  Home
      </AniLink>
      </div>
      
      <h3 className="texta">(Build in progress should be available soon)</h3>
  </Layout> }

export default Error
