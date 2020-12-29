import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import build from "../assets/build.gif"
import "../css/build.css"

const Error = () => {

  return<Layout>
    <SEO title="Build page" />
      <img src={build} alt="Paris" class="centergif"/>
      <div className="textab">
      <Link to="/" className="btn">
        Back Home
      </Link>
      </div>
      
      <h3 className="texta">(Build in progress should be available soon)</h3>
  </Layout> }

export default Error
