import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Container = styled.div`
  &before {
    background-color: rgb(216, 216, 216);
    width: 2px;
  }
`

const Timeline = () => (
  <Layout>
    <Container>
      sdf
    </Container>
  </Layout>
)

export default Timeline
