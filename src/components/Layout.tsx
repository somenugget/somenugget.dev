import * as React from 'react'
import { Link } from 'gatsby'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <nav className="container my-5">
        <h2 className="title is-2">
          <Link to="/">My Blog</Link>
        </h2>
      </nav>
      <div>{children}</div>
    </div>
  )
}

export default Layout
