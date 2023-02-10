import * as React from 'react'

import NavBar from 'src/components/NavBar'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="container px-5">{children}</main>
    </div>
  )
}

export default Layout
