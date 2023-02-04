import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from 'src/components/Layout'

import type { BlogPostPageProps } from 'src/types'
import type { HeadFC } from 'gatsby'

const BlogPost: React.FC<BlogPostPageProps> = ({ data, children }) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <main className="container content">
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.datePublished}</p>
        <div>{children}</div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        datePublished(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head: HeadFC = () => <title>Home Page</title>

export default BlogPost
