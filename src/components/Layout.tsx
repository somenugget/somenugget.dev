import * as React from 'react'

const Layout: React.FC<any> = ({ children, ...props }) => {
  return (
    <div>
      <nav className="text-3xl font-bold">My Blog</nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
