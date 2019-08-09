import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import styled from 'styled-components'

const circleSize = 55

export default () => (
  <Layout>
    <Header>
      <h1>Curriculum Vitae</h1>
      <h3>Academic and Professional</h3>
    </Header>
    <TimelineContainer>
      <Timeline>
        <Entry>
          <EntryPoint year={2019} />
          <h3>Ph.D. in Theoretical Particle Physics</h3>
          <h4>Autonomous University of Barcelona</h4>
          <Card
            title="Thesis: The QCD Strong Coupling from Hadronic Tau Decays"
            subtitle="Writing a C++ program to extract the strong coupling from CERN within the framework of QCD Sum Rules.
            Analysing the effects of Quark-Hadron Duality. Probing the validity of FOPT and CIPT."
            backgroundColor="white"
            textAlign="left"
            extras={{pdf: 'phdThesis.pdf', git: 'https://github.com/phd-dirk/FESR'}}
          />
        </Entry>
        <Entry>
          <EntryPoint year={2015} />
          <h3>M.Sc. in Theoretical Particle Physics</h3>
          <h4>Autonomous University of Barcelona</h4>
          <Card
            title="Thesis: 1-Loop Anomalous Dimensions of 4-Quark Operators"
            subtitle="Calculating the Anomalous Dimension matrix of 4-Quark Operators with the help of Feynman Diagram techniques."
            backgroundColor="white"
            textAlign="left"
            extras={{pdf: 'masterThesis.pdf', git: 'https://github.com/phd-dirk/MasterThesis'}}
          />
        </Entry>
        <Entry>
          <EntryPoint year={2014} />
          <h3>B.Sc. in Theoretical Condensed Matter Physics</h3>
          <h4>Goethe University Frankfurt</h4>
          <Card
            title="Thesis: Band Structure Studies of Graphene and Modified Graphene Structures"
            subtitle="Using Density Functional Theory with the FPLO Software to simulate Graphene and extract its properties."
            backgroundColor="white"
            textAlign="left"
            extras={{pdf: 'bachelorThesis.pdf', git: 'https://github.com/phd-dirk/Bachelor'}}
          />
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
