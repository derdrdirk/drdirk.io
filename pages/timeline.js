import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import styled from 'styled-components'

const circleSize = 55

export default () => (
  <Layout>
    <Header>
      <h1>Timeline</h1>
      <h3>Study and Work</h3>
    </Header>
    <TimelineContainer>
      <Timeline>
        <Entry>
          <EntryPoint year={2019} />
          <h3>Ph.D. in Theoretical Particle Physics</h3>
          <h4>Autonomous University of Barcelona</h4>
          <Card title="The QCD Strong Coupling from Hadronic Tau Decays" subtitle="lol" backgroundColor="white" textAlign="left" />
        </Entry>
        <Entry>
          <EntryPoint year={2015} />
          <h3>M.Sc. in Theoretical Particle Physics</h3>
          <h4>jojo</h4>
          <Card title="Thesis" subtitle="lol" backgroundColor="white" textAlign="left" />
          <br />
          <Card title="Paper" subtitle="lol" backgroundColor="white" textAlign="left" />
        </Entry>
        <Entry>
          <EntryPoint year={2014} />
          <h3>B.Sc. in Theoretical Condensed Matter Physics</h3>
          <h5>jojo</h5>
          <Card title="Thesis" subtitle="lol" backgroundColor="white" textAlign="left" />
        </Entry>
      </Timeline>
    </TimelineContainer>
  </Layout>
)


const Header = styled.section`
  height: 550px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-image: url('/static/images/road.png')
`
const TimelineContainer = styled.div`
  background-color: rgb(249, 250, 252);
  width: 100vw;
  padding: 70px;
`
const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  padding-left: 70px;
  margin: auto;
  &:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 9px;
    bottom: 20px;
    width: 4px;
    background: #d8d8d8;
  }
`
const Entry = styled.div`
  position: relative;
`
const EntryPoint = styled.div`
  line-height: ${circleSize}px;
  &::before{
    content: "";
    width: 80px;
    height: 80px;
    opacity: 0.18;
    position: absolute;
    left: -99px;
    top: -13px;
    border-radius: 40px;
    background: linear-gradient(44.28deg, rgb(0, 219, 226) 0%, rgb(1, 191, 227) 101.29%);
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
`
