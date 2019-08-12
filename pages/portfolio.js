import React, { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import FullScreenModal from '../components/FullScreenModal'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'


// for(const item of portfolio) {
//   item.fullscreen = false
// }


// const tags = new Set()
// portfolio.forEach(obj => obj.tags.forEach(tag => tags.add(tag)))


export default () => {
  // const [filter, setFilter] = useState({})
  // const [data, setData] = useState(portfolio)
  const portfolio = useSelector(state => state.portfolio)

  // const toggleFullScreen = (title) => {
  //   setData(data.map(item => {
  //     if(item.title !== title) return {...item, fullscreen: false}
  //     return {...item, fullscreen: !item.fullscreen}
  //   }))
  // }

  // const filteredData = data.filter(
  //   ( data ) => {
  //     if(filter.onlyProfessional && !data.isProfessional)
  //       return false

  //     if(filter.onlyAcademic && data.isProfessional)
  //       return false

  //     for(const tag of tags) {
  //       if(filter[tag] && !data.tags.includes(tag))
  //         return false
  //     }

  //     return true
  // })

  // const Filter = ({ filterProp, title }) => (
  //   <Button
  //     active={filter[filterProp]}
  //     onClick={() => setFilter({...filter, [filterProp]: !filter[filterProp]})}
  //   >
  //     {title}
  //   </Button>
  // )

  return (
    <Layout>
      <Controls>
        {/* <Filter filterProp="onlyProfessional" title="Professional"/> */}
        {/* <Filter filterProp="onlyAcademic" title="Academic"/> */}
        {/* {[...tags].map(tag => <Filter key={tag} filterProp={tag} title={tag} />)} */}
      </Controls>
      <Flipper flipKey={JSON.stringify(portfolio)}>
        <List>
          {portfolio.map(({ title, fullscreen, ...rest }) => {
            if(fullscreen) {
              return (
                <Flipped key={title} flipId={title}>
                  <FullScreenModal
                    title={title}
                    close={() => toggleFullScreen(title)}
                    {...rest}
                  />
                </Flipped>
              )
            } else {
              delete rest.subtitle
              return (
                <Flipped key={title} flipId={title}>
                  <ListElement onClick={() => toggleFullScreen(title)}>
                    <Card title={title} {...rest}/>
                  </ListElement>
                </Flipped>
              )
            }
          })}
        </List>
      </Flipper>
    </Layout>
  )
}

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 50px;
  width: 90vw;
  margin: auto;
  flex-wrap: wrap;
`
const Button = styled.button`
  border: 0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px 0px;
  padding: 10px;
  font-family: FontRegular;
  font-weight: 400;
  font-size: 16px;
  background-color: ${props => props.active ? 'green' : 'white'};
  margin: 7px;
  cursor: pointer;
  &:hover {
    background-color: yellow;
  }
`
const List = styled.ul`
  padding-top: 100px;
  margin: auto;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // grid-template-columns: 30% 30% 30%;
  // grid-column-gap: 16px;
`
const ListElement = styled.li`
  display: flex;
  width: 32.5%;
  margin: 0 0 16px 0;
`
