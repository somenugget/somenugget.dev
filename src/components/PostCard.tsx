import React from 'react'
import { Link } from 'gatsby'

interface PostCardProps {
  slug: string
  title: string
  datePublished: string
  excerpt: string
}

const PostCard: React.FC<PostCardProps> = ({ slug, title, datePublished, excerpt }) => {
  return (
    <div className="mb-5">
      <h4 className="has-title-font title is-4">
        <Link to={`/${slug}`}>{title}</Link>
      </h4>
      <p className="subtitle is-6 mb-1 has-text-grey">
        <span className="is-text">{datePublished}</span>
      </p>
      <p>{excerpt}</p>
    </div>
  )
}

export default PostCard
