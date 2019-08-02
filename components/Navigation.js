import React from 'react'
import {Spring, animation} from 'react-spring'
import styled from 'styled-components'
import Link from 'next/link'

const NavigationContainer = styled.div`
  width: 100vw;
  position: fixed;
  background-color: rgba(28, 29, 35, 0.8);
  display: flex;
  justify-content: center;
  z-index: 1;
`

const StyledUl = styled.ul`
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
class Navigation extends React.Component {
  state = { height: 64 }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = event => {
    let height = 1 - (document.scrollingElement.scrollTop * 2) / 1000;

    if (height < 0.68) {
      height = 0.68;
    }

    this.setState({ height: height * 64})
  }

  renderIn = ({h}) => (
    <NavigationContainer style={{height: h.value}}>
        <StyledUl>
          <li style={{lineHeight: `${h.value}px`}}>
            <Link href="/">Home</Link>
          </li>
          <li style={{lineHeight: `${h.value}px`}}>
            <Link href="/timeline">Timeline</Link>
          </li>
          <li style={{lineHeight: `${h.value}px`}}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </StyledUl>
    </NavigationContainer>
  )

  render = () => (
    <Spring from={{h: 64}} to={{h: this.state.height}}>
      {this.renderIn}
    </Spring>
  )
}

export default Navigation
