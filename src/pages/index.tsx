import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from 'src/components/Layout'

import type { IndexPageProps } from 'src/types'
import type { HeadFC } from 'gatsby'

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout {...props}>
      <main className="container">
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <div className="content mt-2">
          {props.data.allMdx.nodes.map((node) => (
            <div key={node.id}>
              <h4>{node.frontmatter.name}</h4>
              <p>Posted: {node.frontmatter.datePublished}</p>
              <Link to={`/${node.frontmatter.slug ?? ''}`}>{node.frontmatter.title}</Link>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
      </main>
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
