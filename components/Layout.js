import React, {Fragment} from 'react'
import Navbar from './Navbar'

const Layout = props => (
  <Fragment>
    <Navbar />
    <div style={{position: 'relative', top: 40}}>
      {props.children}
    </div>
  </Fragment>
)

export default Layout
