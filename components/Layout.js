import React, {Fragment} from 'react'
import Footer from './Footer'
import dynamic from 'next/dynamic'

const DynamicNavbar = dynamic(
  () => import('./Navbar'),
  { ssr: false }
)
const Layout = props => (
  <Fragment>
    <DynamicNavbar />
    <div style={{position: 'relative', top: 40, paddingBottom: 45}}>
      {props.children}
    </div>
    <Footer />
  </Fragment>
)

export default Layout
