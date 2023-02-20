import type { Node, PageProps } from 'gatsby'

import MdxFrontmatter = Queries.MdxFrontmatter

export interface MdxNode {
  id: string
  excerpt: string
  title: string
  slug: string
  frontmatter: MdxFrontmatter & { datePublishedFormatted: string }
  parent: Node
}

interface Data {
  data: {
    allMdx: {
      nodes: MdxNode[]
    }
  }
}

export type BlogPostPageProps = PageProps & { data: { mdx: MdxNode } }

export type IndexPageProps = PageProps & Data
