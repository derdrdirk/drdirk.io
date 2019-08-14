import React, {Fragment} from 'react'
import Footer from './Footer'
import dynamic from 'next/dynamic'
import { initGA, logPageView } from '../utils/analytics'


const DynamicNavbar = dynamic(
  () => import('./Navbar'),
  { ssr: false }
)
export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <Fragment>
        <DynamicNavbar />
        <div style={{position: 'relative', top: 40, paddingBottom: 45}}>
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    )}
}

