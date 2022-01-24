import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"
import * as layOutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layOutStyles.container}>
      <div className={layOutStyles.content}>
        <Header />
        <div className={layOutStyles.mainContent}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
