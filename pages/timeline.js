import React, {useState} from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import styled from 'styled-components'
import portfolio from '../components/portfolioList.json'

const circleSize = 55

export default () => {
  const [curriculum, setCurriculum] = useState('professional')
  const chooseCurriculum = (curriculum) => () => setCurriculum(curriculum)

  const list = filterSortPortfolio(curriculum)

  return (
    <Layout>
      <Header>
        <h1>Curriculum Vitae</h1>
        <h3>Academic and Professional</h3>
      </Header>
      <TimelineContainer>
        <Control>
          <CtrlButton left onClick={chooseCurriculum('academic')} active={curriculum === 'academic'}>Academic</CtrlButton>
          <CtrlButton center onClick={chooseCurriculum('professional')} active={curriculum === 'professional'}>Professional</CtrlButton>
          <CtrlButton right onClick={chooseCurriculum('interests')} active={curriculum === 'interests'}>Interests</CtrlButton>
        </Control>
        <Timeline>
          {list.map((entry) => (
            <Entry key={entry.title}>
              <EntryPoint year={entry.year} />
              <Card
                {...entry}
                backgroundColor="white"
                textAlign="left"
              />
            </Entry>
          ))}
        </Timeline>
      </TimelineContainer>
    </Layout>
  )
}

const filterSortPortfolio = (type) => {
  return portfolio
    .filter(entry => entry.timeline && entry.timeline === type)
    .sort((a, b) => {
      if (a.year < b.year) {
        return -1;
      }
      if (a.year > b.year) {
        return 1;
      }
      return 0;
    }).reverse()
}

const Interests = () => (
  <Timeline>
    <Entry>
      <EntryPoint year={2019} />
      <h3><a href="https://cysae.com" target="_blanc">Prototyping</a></h3>
      <h4>3D Printing, Electronics and IOT</h4>
      <Card
        title="Building a Lab and designing IOT Home Security"
        subtitle="Successfully equipped a prototyping lab with an Ender-3 3D printer, a 3018 CNC milling machine/ laser engraver.
                  Designing custom Home Security IOT devices within Fusion 360 using Arduino, ESP32 and lots of sensors like cameras,
                  vibration sensors, distance sensors and finger print sensors. Installing a VPN and Zoneminder on two Raspberrypis, which
                  will be moved on the NAS Killer v3.0."
        backgroundColor="white"
        textAlign="left"
        extras={{git: 'https://github.com/Knowledge91/esp32cam', web: ['https://www.serverbuilds.net/nas-killer-v30', 'http://www.pivpn.io', 'https://zoneminder.com/']}}
      />
    </Entry>
  </Timeline>
)


const Header = styled.section`
  height: 550px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-image: url('/static/images/road.png');

  > h1 {
    color: rgb(45, 64, 81);
    font-family: FontLight;
    font-size: 42px;
  }
  > h3 {
    font-family: FontRegular, sans-serif;
    font-size: 20px;
    line-height: 1.75;
    font-weight: 400;
    text-align: center;
    color: rgb(127, 129, 152);
  }
`
const Control = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  height: 40px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  position: absolute;
  top: -20px;

  @media (min-width: 767px) {
    height: 60px;
    top: -30px;
    width: 70vw;
  }
`
const CtrlButton = styled.button`
  width: 33.33%;
  border-radius: ${props => {
    if(props.left) return '6px 0px 0px 6px'
    if(props.right) return '0px 6px 6px 0px'
    return '0'
  }};
  color: rgb(45, 64, 81);
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.024) 0px 4px 6px;
  background-color: ${props => props.active ? 'white' : 'rgb(230, 233, 239)'};
  border-width: 1px;
  border-style: solid;
  border-color: rgba(151, 151, 151, 0.16);
  transition: all 0.25s ease-in-out 0s;
  &:focus {
    outline: none;
  }

  @media (min-width: 767px) {
    height: 60px;
    top: -30px;
  }
`
const TimelineContainer = styled.div`
  background-color: rgb(249, 250, 252);
  width: 100vw;
  padding: 40px 15px;
  position: relative;
  box-sizing: border-box;

  @media (min-width: 767px) {
    padding: 70px;
  }
`
const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  padding-left: 40px;
  margin: auto;
  box-sizing: border-box;
  &:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 9px;
    bottom: 20px;
    width: 4px;
    background: #d8d8d8;
  }

  @media (min-width: 767px) {
    padding-left: 70px;
  }
`
const Entry = styled.div`
  position: relative;
  margin-bottom: 20px;
`
const EntryPoint = styled.div`
  line-height: ${circleSize}px;
  &::before{
    content: "";
    width: 20px;
    height: 20px;
    opacity: 0.18;
    position: absolute;
    left: -29px;
    top: 2px;
    border-radius: 40px;
    background: linear-gradient(44.28deg, rgb(0, 219, 226) 0%, rgb(1, 191, 227) 101.29%);
  }
  &::after{
    content: "${(props) => props.year}";
    position: absolute;
    display: inline;
    color: white;
    width: ${circleSize*0.7}px;
    text-align: center;
    line-height: ${circleSize*0.7}px;
    height: ${circleSize*0.7}px;
    top: 0px;
    left: -48px;
    border-radius: ${circleSize*0.7/2}px;
    background: linear-gradient(44.28deg, rgb(0, 219, 226) 0%, rgb(1, 191, 227) 101.29%);
  }

  @media (min-width: 767px) {
    &::before{
      width: 80px;
      height: 80px;
      left: -99px;
      top: -13px;
    }
    &::after{
      content: "${(props) => props.year}";
      position: absolute;
      display: inline;
      color: white;
      width: ${circleSize}px;
      text-align: center;
      line-height: ${circleSize}px;
      height: ${circleSize}px;
      top: 0px;
      left: -86px;
      border-radius: ${circleSize/2}px;
      background: linear-gradient(44.28deg, rgb(0, 219, 226) 0%, rgb(1, 191, 227) 101.29%);
    }
  }
`
