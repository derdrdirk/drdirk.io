import React, {Fragment} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = props => (
  <Fragment>
    <Navbar />
    <div style={{position: 'relative', top: 40, paddingBottom: 45}}>
      {props.children}
    </div>
    <Footer />
  </Fragment>
)

export default Layout
