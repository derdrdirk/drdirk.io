import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <Container>
    <Centered>
      <a href="https://www.github.com/knowledge91" target="_blank"><Icon icon={faGithub}/></a>
      <a href="https://www.linkedin.com/in/dirkhornung/" target="_blank"><Icon icon={faLinkedin}/></a>
      <a href="https://www.instagram.com/dirk.hornung/" target="_blank"><Icon icon={faInstagram}/></a>
      <a href="https://www.facebook.com/dirk.hornung91" target="_blank"><Icon icon={faFacebook}/></a>
      <a href="https://www.github.com/knowledge91" target="_blank"><Icon icon={faTwitter}/></a>
      <a href="mailto:hello@drdirk.io" target="_blank"><Icon icon={faEnvelope}/></a>
    </Centered>
  </Container>
)

const Container = styled.section`
  padding: 30px 0px;
  width: 100vw;
  background-color: rgb(249, 250, 252);
`
const Centered = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;

  @media (min-width: 767px) {
    width: 50%;
  }
`
const Icon = styled(FontAwesomeIcon)`
  line-height: 1.5rem;
  color: rgb(127, 129, 152);
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.colors.primaryHover};
  }
`
