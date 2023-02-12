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
    <div>
      <p className="text-sm text-gray-500">
        <time dateTime={datePublished}>{datePublished}</time>
      </p>
      <div className="mt-2">
        <p className="text-xl font-semibold text-gray-900">
          <Link
            to={`/${slug}`}
            className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {title}
          </Link>
        </p>
        <p className="mt-3 text-base text-gray-500">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostCard
