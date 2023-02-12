import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from 'src/components/Layout'
import PostCard from 'src/components/PostCard'

import type { IndexPageProps } from 'src/types'
import type { HeadFC } from 'gatsby'

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout {...props}>
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        {props.data.allMdx.nodes.map((node) => (
          <PostCard
            key={node.id}
            slug={node.frontmatter.slug ?? ''}
            title={node.frontmatter.title ?? ''}
            datePublished={node.frontmatter.datePublished ?? ''}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { datePublished: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          datePublished(formatString: "MMMM D, YYYY")
          title
          slug
        }
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
