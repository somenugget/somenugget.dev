import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from 'src/components/Layout'

import type { BlogPostPageProps } from 'src/types'
import type { HeadFC } from 'gatsby'

const BlogPost: React.FC<BlogPostPageProps> = ({ data, children }) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-3">
          <time dateTime={data.mdx.frontmatter.datePublished ?? ''}>
            {data.mdx.frontmatter.datePublishedFormatted}
          </time>
        </p>
        <h1>{data.mdx.frontmatter.title}</h1>
      </div>
      <div suppressHydrationWarning>{children}</div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        datePublished
        datePublishedFormatted: datePublished(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head: HeadFC = () => <title>Home Page</title>

export default BlogPost
