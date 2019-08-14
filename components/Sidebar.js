import React, {Fragment, useState} from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default ({ children, isOpen, close }) => {
  const overlayStyle = useSpring({
    opacity: isOpen ? 1 : 0,
    display: isOpen ? 'block' : 'none',
  })
  const panelStyle =useSpring({
    transform: isOpen ? 'translate3d(0px,0,0)' : 'translate3d(-255px, 0, 0)',
  })

  return (
    <Fragment>
      <Overlay style={overlayStyle} />
      <Sidebar>
        <Panel style={panelStyle}>
          <Close icon={faTimes} onClick={close} />
          <Logo src="../static/images/logo.png" />
          <LinkList>
            { children }
          </LinkList>
        </Panel>
      </Sidebar>
    </Fragment>
  )
}

const Close = styled(FontAwesomeIcon)`
  color: white;
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 1.5rem;
`

const Overlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 50px;
  right: 0;
  bottom: 0;
  background: rgba(68, 81, 89, 0.65);
  height: 100vh;
  z-index: 1;
`
const Sidebar = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`
const Panel = styled(animated.div)`
  position: absolute;
  background: #1c1c23;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  padding-left: 15px;
  padding-top: 15px;
  box-shadow: -2px 0 36px rgba(0, 0, 0, 0.2);
  color: white;
  z-index: 1;
`
const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  > li {
    padding: 15px 0;
    font-size: 20px;
    cursor: pointer;
  }
`
const Logo = styled.img`
  width: 50px;
  margin-bottom: 10px;
`
