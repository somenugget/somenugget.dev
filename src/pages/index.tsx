import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {graphql} from "gatsby"
import Layout from "../components/layout";

type Node = {
  name: string
}

type Data = {
  data: {
    allFile: {
      nodes: Array<Node>
    }
  }
}

type IndexPageProps = PageProps & Data

const IndexPage: React.FC<IndexPageProps> = (props) => {
  console.log(props)
  return (
    <Layout {...props}>
      <main>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <div className="container">
          {props.data.allFile.nodes.map((file) => (
            <p key={file.name}>{file.name}</p>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
