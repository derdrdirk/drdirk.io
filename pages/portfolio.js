import React, { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const portfolio = [{
  title: 'PhD Thesis',
  tags: ['Physics', 'Quantum Chromodynamics', 'Quantum Field Theory', 'C++', 'Numerics', 'Fits'],
}, {
  title: 'Master Thesis',
  tags: ['Physics', 'Particle Physics', 'Quantum Field Theory']
}, {
  title: 'Bachelor Thesis',
  tags: ['Physics', 'Condensed Matter Physics', 'Quantum Mechanics', 'C++', 'Fits']
}, {
  title: 'Anomalous dimensions of four-quark operators and renormalon structure of mesonic two-point correlators',
  tags: ['Physics', 'Quantum Field Theory']
}, {
  title: 'Stamper',
  company: 'CYSAE',
  tags: ['React', 'Redux', 'Ant-Design', 'Startup', 'GraphQL', 'Docker', 'AWS', 'S3', 'Ethereum', 'Blockchain', 'Prisma', 'MySQL', 'AWS RDS'],
}, {
  title: 'Boardchain',
  company: 'CYSAE',
  tags: ['React', 'Redux', 'Ant-Design', 'Startup', 'AWS Amplify', 'S3', 'Legaltech', 'Startup', 'AWS DynamoDB', 'AWS Cognito', 'AWS S3'],
}, {
  title: 'CYSAE Website',
  company: 'CYSAE',
  tags: ['Wordpress', 'HTML', 'CSS', 'jQuery', 'AWS Route 53', 'AWS SES', 'Startup']
}, {
  title: 'Utility Token',
  company: 'CYSAE',
  tags: ['Blockchain', 'Node', 'Express', 'REST API', 'Ethereum', 'Startup', 'Azure']
}, {
  title: 'Chatbot',
  company: 'Alda',
  tags: ['Fintech', 'Facebook API', 'Saltedge API', 'Messenger', 'AWS Lambda', 'AWS Cognito', 'PostgreSQL', 'Dialogflow', 'Natural Language Processing', 'Startup', 'Python', 'Javascript', 'AWS VPN', 'AWS RDS', 'Serverless', 'Zappa']
}, {
  title: 'Alda Website',
  company: 'Alda',
  tags: ['Fintech', 'React', 'CSS', 'JavaScript', 'Photoshop']
}, {
  title: 'Chatbot UI',
  company: 'Alda',
  tags: ['React', 'Redux', 'AWS', 'Redux', 'AWS Cognito', 'AWS Amplify', 'CSS']
}, {
  title: 'Chatbot Aigues de Barcelona',
  company: 'Alda',
  tags: ['React', 'Liferay', 'CSS', 'JavaScript', 'Java', 'Photoshop', 'AWS Lambda', 'Dialogflow'],
}, {
  title: 'Ecommerce IOS App',
  company: 'WeGoLoco',
  tags: ['Swift', 'AWS Cognito', 'AWS S3'],
}, {
  title: 'WeGoLoco Website',
  company: 'WeGoLoco',
  tags: ['Wordpress', 'Google Analytics', 'CSS', 'Photoshop', 'AWS Route53'],
}, {
  title: 'FuldaCity Website',
  company: 'FuldaCity',
  tags: ['Wordpress', 'Google Analytics', 'CSS', 'Photoshop', 'AWS Route53', 'PHP']
}, {
  title: 'FuldaCity App',
  company: 'FuldaCity',
  tags: ['Cordova', 'Meteor', 'React', 'Heroku', 'MongoDB', 'Javascript']
}, {
  title: 'Eevents Website',
  company: 'Eevents Fulda',
  tags: ['Wordpress', 'CSS', 'Photoshop', 'PHP']
}, {
  title: 'Building Sound System',
  company: 'Eevents Fulda',
  tags: ['Prototyping', 'Electronics']
}, {
  title: 'DJ',
  company: 'Eevents Fulda',
  tags: ['DJ', 'Music', 'Traktor']
}, {
  title: 'Hornung Webdesign Website',
  company: 'Hornung Webdesign',
  tags: ['HTML', 'CSS', 'jQuery', 'JavaScript']
}, {
  title: 'DJ Abdul',
  company: 'Hornung Webdesign',
  tags: ['Laravel', 'PHP', 'Ecommerce']
}, {
  title: 'Architektur International Website',
  company: 'Hornung Webdesign',
  tags: ['HTML', 'CSS', 'JavaScript']
}, {
  title: 'Architektur International: BranchenIndex'
  company: 'Hornung Webdesign',
  tags: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
}, {
  title: 'Neidclub Website',
  company: 'Hornung Webdesign',
  tags: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript'],
}, {
  title: 'Dekoline Website',
  company: 'Hornung Webdesign',
  tags: ['HTML', 'CSS', 'JavaScript']
}, {
  title: 'Spracherlebniscamp Wasserkuppe',
  company: 'Hornung Webdesign',
  tags: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
}, {
  title: 'Spracherlebniscamp Wasserkuppe: Lady Game',
  company: 'Hornung Webdesign',
  tags: ['Flash', 'ActionScript']
}]


const tags = new Set()
portfolio.forEach(obj => obj.tags.forEach(tag => tags.add(tag)))



export default () => {
  const [filter, setFilter] = useState({})
  const [data, setData] = useState(portfolio)

  const filteredData = data.filter(
    ( data ) => {
      // if(filter.onlyProfessional && !data.isProfessional)
      //   return false

      // if(filter.onlyAcademic && data.isProfessional)
      //   return false

      for(const tag of tags) {
        if(filter[tag] && !data.tags.includes(tag))
          return false
      }

      return true
  })

  const Filter = ({ filterProp, title }) => (
    <Button
      active={filter[filterProp]}
      onClick={() => setFilter({...filter, [filterProp]: !filter[filterProp]})}
    >
      {title}
    </Button>
  )

  return (
    <Layout>
      <Controls>
        {/* <Filter filterProp="onlyProfessional" title="Professional"/> */}
        {/* <Filter filterProp="onlyAcademic" title="Academic"/> */}
        {[...tags].map(tag => <Filter filterProp={tag} title={tag} />)}
      </Controls>
      <Flipper flipKey={JSON.stringify(filteredData)}>
        <List>
          {filteredData.map(({ title }) => (
            <Flipped key={title} flipId={title}>
              <ListElement><Card title={title}/></ListElement>
            </Flipped>
          ))}
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
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 16px;
`
const ListElement = styled.li`
  display: block;
  margin: 0 0 16px 0;
`
