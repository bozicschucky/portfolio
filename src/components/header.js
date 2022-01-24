import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as headerStyles from "./header.module.scss"
const Header = () => {
  const query = graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `

  const data = useStaticQuery(query)

  return (
    <header className={headerStyles.header}>
      <div>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p className={headerStyles.description}>{data.site.description}</p>
      </div>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" activeClassName={headerStyles.activeMenuItem}>
              {data.site.siteMetadata.title}
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName={headerStyles.activeMenuItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={headerStyles.activeMenuItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={headerStyles.activeMenuItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
