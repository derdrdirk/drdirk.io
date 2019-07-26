import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 12px;
  background-color: #f9fafc;
  box-sizing: border-box;
  ${function (props) {
console.log(props)
 return(`
    grid-column-start: 1;
    grid-column-end: 3;
  `)}}
`

const Card = (props) => (
  <StyledCard>
    {props.title}
  </StyledCard>
)

export default Card
