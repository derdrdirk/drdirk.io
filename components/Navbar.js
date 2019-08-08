import React, {useState, useCallback} from 'react'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import Link from 'next/link'
import useEventListener from './useEventListener'

const NavigationContainer = styled(animated.div)`
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1;
`

const StyledUl = styled(animated.div)`
  list-style: none;
  display: flex;
  margin: 0;
  height: 100%;

  > li {
    color: white;
    font-family: FontRegular;
    padding: 0 50px 0 50px;
    /* line-height: 60px; */
    font-size: 17px;
  }
`
/* class Navbar extends React.Component {
 *   state = { height: 64, opacity: 1 }
 * 
 *   componentDidMount() {
 *     window.addEventListener('scroll', this.onScroll);
 *   }
 * 
 *   componentWillUnmount() {
 *     window.removeEventListener('scroll', this.onScroll);
 *   }
 * 
 *   onScroll = event => {
 *     let height = 1 - (document.scrollingElement.scrollTop * 2) / 1000;
 *     if (height < 0.68) {
 *       height = 0.68;
 *     }
 * 
 *     let opacity = 1 - (document.scrollingElement.scrollTop * 2) / 1000;
 *     if (opacity < 0.8) {
 *       opacity = 0.8;
 *     }
 * 
 *     this.setState({ height: height * 64, opacity })
 *   } */

  const Navbar = () => {
    const [scrollPos, setScrollPos] = useState({y: 0})

    const handler = useCallback(
      () => {
        const scrollY = window.scrollY
        setScrollPos({y: scrollY})
      }, [setScrollPos]
    )

    // SSR window is only defined on the client
    if(typeof window === 'object') {
      useEventListener('scroll', handler, window)
    }

    const isScrolled = (scrollPos.y > 10) ? true : false
    const props = useSpring({
      height: (isScrolled) ? '40px' : '64px',
      lineHeight: (isScrolled) ? '40px' : '64px',
      backgroundColor: (isScrolled) ? 'rgba(28, 29, 35, 0.8)' : 'rgba(28, 29, 35, 1)'
    })

    return (
      <NavigationContainer style={props}>
        <StyledUl>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/timeline"><a>Timeline</a></Link>
          </li>
          <li>
            <Link href="/portfolio"><a>Portfolio</a></Link>
          </li>
        </StyledUl>
      </NavigationContainer>
    )
  }

export default Navbar

/* <animated.div style={{...props, backgroundColor: 'black', position: 'fixed', width: '100vw', zIndex: 1}}>
 * </animated.div> */

