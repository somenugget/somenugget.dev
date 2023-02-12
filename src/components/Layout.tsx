import * as React from 'react'

import NavBar from 'src/components/NavBar'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className="px-6 pt-6 pb-20 lg:px-8 lg:pt-8 lg:pb-28">
      <main className="relative mx-auto max-w-lg lg:max-w-7xl">
        <NavBar />
        {children}
      </main>
    </div>
  )
}

export default Layout
