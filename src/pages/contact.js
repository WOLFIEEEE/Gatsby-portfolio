import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../css/contact.css"
import { Link } from "gatsby"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Reach Me" />
       <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close" />
                <div className="screen-header-button maximize" />
                <div className="screen-header-button minimize" />
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="app-contact">CONTACT INFO : +91 8290938303</div>
              </div>
              <div className="screen-body-item">
                <form action="https://formspree.io/f/xayllodz" method="POST">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input type="text" name="name" className="app-form-control" placeholder="NAME" />
                    </div>
                    <div className="app-form-group">
                      <input type="email" placeholder="email" className="app-form-control" />
                    </div>
                    <div className="app-form-group message">
                      <input name="message" className="app-form-control" placeholder="MESSAGE" />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="texta">For any suggestion for my portfolio Website Click below</h3>
      <div className="textab">
      <Link to="/build" className="btn" >
       Add suggestion
      </Link>
      </div>

    </Layout>
  )
}

export default contact