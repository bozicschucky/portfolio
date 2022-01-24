import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Metadata({ title, description }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaTitle = title || data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  const author = data.site.siteMetadata.author

  return (
    <Helmet>
      <title>
        {metaTitle} | {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={author} />
    </Helmet>
  )
}
export default Metadata
