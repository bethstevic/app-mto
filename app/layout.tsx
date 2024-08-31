import React, { ReactNode } from 'react'

import NavBar from '@/components/nav-bar/NavBar'

const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

export default Layout