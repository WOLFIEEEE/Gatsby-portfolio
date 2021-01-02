import React from "react"
import logo from "../assets/logo1.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import ThemeChanger from "../components/themeChanger"
import "../css/navicon.css"
const Navbar = ({toggleSidebar}) => {
  return (
<nav className="navbar">
  <div className="nav-center">
    <div className="nav-header">
    <h1 className="red">Portfolio</h1>
      <button type="button" className="toggle-btn" onClick={toggleSidebar}>
      <FaAlignRight></FaAlignRight>
      </button>
      </div>
    <PageLinks styleClass="nav-links"></PageLinks>
   
  </div>
  <ThemeChanger/>
</nav>
  );
}

export default Navbar
