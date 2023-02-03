import * as React from "react"
import type {HeadFC, Node, PageProps} from "gatsby"
import {graphql} from "gatsby"
import Layout from "../components/Layout";
import MdxFrontmatter = Queries.MdxFrontmatter;

type MdxNode = {
  id: string
  excerpt: string
  frontmatter: MdxFrontmatter
  parent: Node
}

type Data = {
  data: {
    allMdx: {
      nodes: Array<MdxNode>
    }
  }
}

type IndexPageProps = PageProps & Data

const IndexPage: React.FC<IndexPageProps> = (props) => {
  console.log(props.data.allMdx.nodes)
  return (
    <Layout {...props}>
      <main>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <div className="container">
          {props.data.allMdx.nodes.map((node) => (
            <>
              <h4 key={node.id}>{node.frontmatter.name}</h4>
              <p>Posted: {node.frontmatter.datePublished}</p>
              <p>{node.excerpt}</p>
            </>
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
        }
        parent {
          ... on File {
            name
          }
        }
        id
        body
        excerpt
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
