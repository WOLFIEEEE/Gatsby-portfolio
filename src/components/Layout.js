import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen,setIsopen]=React.useState(false);
  const toggleSidebar=()=>{
    setIsopen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
