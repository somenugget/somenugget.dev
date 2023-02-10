import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from 'src/components/Layout'
import PostCard from 'src/components/PostCard'

import type { IndexPageProps } from 'src/types'
import type { HeadFC } from 'gatsby'

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout {...props}>
      <p>
        A software developer shares their experiences, insights, and knowledge on the
        world of Ruby on Rails, React.js and others.
      </p>
      <div className="mt-5">
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
        frontmatter {
          datePublished(formatString: "MMMM D, YYYY")
          name
          title
          slug
        }
        parent {
          ... on File {
            name
          }
        }
        id
        excerpt
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
