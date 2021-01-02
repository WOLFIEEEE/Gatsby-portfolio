import React from "react"
import "../css/neon.css"
const Title = ({title}) => {
  return <div className="section-title">
  <h2 className="neon">{title || "default title"}</h2>
  <div className="underline"></div>
</div>
}

export default Title
