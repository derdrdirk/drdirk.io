import React, {useState, useCallback} from 'react'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import Link from 'next/link'
import useEventListener from './useEventListener'

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
          <Link href="/"><a className="dark">Home</a></Link>
        </li>
        <li>
          <Link href="/timeline"><a className="dark">Timeline</a></Link>
        </li>
        <li>
    <img src="../static/images/logo.png" style={{height: '80%', verticalAlign: 'middle'}} />
        </li>
        <li>
          <Link href="/portfolio"><a className="dark">Portfolio</a></Link>
        </li>
        <li>
          <a className="dark" href="mailto:hello@drdirk.io">hello@drdirk.io</a>
        </li>
      </StyledUl>
    </NavigationContainer>
  )
}

export default Navbar

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
    height: 100%;
    position: relative;
  }
`
