import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from "./footer.module.scss"
function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.footerContainer}>
        Footer Page
        <p>
          Developed by {data.site.siteMetadata.author} &copy;
          {new Date().getFullYear()}{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
