import * as React from 'react'

import Layout from 'src/components/Layout'

import type { HeadFC } from 'gatsby'

const AboutPage: React.FC<any> = () => {
  return (
    <Layout>
      <main className="container">Developer from Ukraine</main>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About</title>
