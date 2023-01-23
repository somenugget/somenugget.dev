import * as React from 'react'

const Layout: React.FC<any> = ({ children , ...props}) => {
  return (
    <div>
      <nav>
        My Blog
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
