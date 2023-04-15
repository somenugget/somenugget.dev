import * as React from 'react'
import { Link } from 'gatsby'

const NavBar: React.FC<any> = () => {
  return (
    <nav className="flex items-center justify-between pb-6 mb-8 border-b-2 border-b-gray">
      <h6 className="tracking-tight text-gray-900 sm:text-xl">
        <Link className="" to="/">
          Sharing some experience of Ruby on Rails, React.js and others
        </Link>
      </h6>

      <div className="shrink-0 ml-10">
        <Link to="/about" className="">
          About me
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
