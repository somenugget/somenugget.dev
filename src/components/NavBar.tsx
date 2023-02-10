import * as React from 'react'
import { Link } from 'gatsby'

const NavBar: React.FC<any> = () => {
  return (
    <nav className="navbar container px-5" role="navigation" aria-label="main navigation">
      <Link
        className="navbar-brand is-size-2 has-title-font has-text-weight-semibold"
        to="/"
      >
        Developer notes
      </Link>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link to="/about" className="navbar-item">
            About me
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
