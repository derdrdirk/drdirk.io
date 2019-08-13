import React, { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import FullScreenModal from '../components/FullScreenModal'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import portfolio from '../components/portfolioList'
import { company, tag, title, reset } from '../redux/actions'

let titleNames = new Set()
let companyNames = new Set()
let tagNames = new Set()
for(const entry of portfolio) {
  titleNames.add(entry.title)
  if('company' in entry) companyNames.add(entry.company)
  if('tags' in entry) {
    for(const tag of entry.tags) {
      tagNames.add(tag)
    }
  }
}


export default () => {
  const portfolio = useSelector(state => state.portfolio)
  const dispatch = useDispatch()
  const [fullscreenTitle, setFullscreenTitle] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState(null)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedTags, setSelectedTags] = useState(null)

  function resetSelections() {
    setSelectedTitle(null)
    setSelectedCompany(null)
    setSelectedTags(null)
  }

  return (
    <Layout>
      <Controls>
        <Selector>
          <p>Filter by Title:</p>
          <Select
            placeholder="Select Title..."
            value={selectedTitle}
            onChange={
              (selectedOption) => {
                resetSelections()
                dispatch(title(selectedOption.value))
                setSelectedTitle(selectedOption)}
            }
            options={[...titleNames].map(t => ({value: t, label: t}))}
          />
        </Selector>
        <Selector>
          <p>Filter by Company:</p>
          <Select
            placeholder="Select Company..."
            value={selectedCompany}
            onChange={(selectedOption) => {
              resetSelections()
              dispatch(company(selectedOption.value))
              setSelectedCompany(selectedOption)
            }}
            options={[...companyNames].map(c => ({value: c, label: c}))}
          />
        </Selector>
        <Selector>
          <p>Filter by Tags:</p>
          <Select
            placeholder="Select Tags..."
            value={selectedTags}
            onChange={
              (selectedOptions) => {
                if(selectedOptions) {
                  dispatch(tag(selectedOptions.map(o => o.value)))
                } else {
                  dispatch(reset)
                }
                resetSelections()
                setSelectedTags(selectedOptions)
              }
            }
            options={[...tagNames].map(t => ({value: t, label: t}))}
            isMulti
          />
        </Selector>
        <Selector>
          <Button onClick={() => dispatch(reset)}>Reset Filter</Button>
        </Selector>
      </Controls>
      <Flipper flipKey={JSON.stringify(portfolio)}>
        <List>
          {portfolio.map(({ title,  ...rest }) => {
            if(title === fullscreenTitle) {
              return (
                <Flipped key={title} flipId={title}>
                  <FullScreenModal
                    title={title}
                    close={() => setFullscreenTitle(null)}
                    {...rest}
                  />
                </Flipped>
              )
            } else {
              delete rest.subtitle
              return (
                <Flipped key={title} flipId={title}>
                  <ListElement onClick={() => setFullscreenTitle(title)}>
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
  justify-content: center;
  align-items: flex-end;
  position: relative;
  top: 50px;
  width: 50vw;
  margin: auto;
  flex-wrap: wrap;
`
const Selector = styled.div`
  flex-grow: 1;
  margin-right: 20px;
`
const Button = styled.button`
  border-color: hsl(0,0%,80%);
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  border-radius: 8px;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primaryHover}
  }
 `
const List = styled.ul`
  padding-top: 100px;
  margin: auto;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ListElement = styled.li`
  display: flex;
  width: 32.5%;
  margin: 0 0 16px 0;
  cursor: pointer;
`
