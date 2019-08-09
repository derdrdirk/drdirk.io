import React, {useState} from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import styled from 'styled-components'

const circleSize = 55

export default () => {
  const [curriculum, setCurriculum] = useState('academic')
  const chooseCurriculum = (curriculum) => () => setCurriculum(curriculum)


  return (
    <Layout>
      <Header>
        <h1>Curriculum Vitae</h1>
        <h3>Academic and Professional</h3>
      </Header>
      <Control>
        <CtrlButton left onClick={chooseCurriculum('academic')} active={curriculum === 'academic'}>Academic</CtrlButton>
        <CtrlButton onClick={chooseCurriculum('professional')} active={curriculum === 'professional'}>Professional</CtrlButton>
      </Control>
      <TimelineContainer>
        {curriculum === 'academic' ? <Academic /> : <Professional />}
      </TimelineContainer>
    </Layout>
  )
}

const Academic = () => (
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
        subtitle="Specializing in theoretical physics with topics as Quantum Field Theory and the Standard Model, while finding a new working group under the lead of Prof. Dr. Matthias Jamin at the Institute of High Energy Physics (IFAE) of the Universitat Autònoma de Barcelona. Right now researching Low-energy QCD and the determination of Standard Model Parameters."
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
        subtitle="Working in the group of Prof. Dr. Roser Valentí at the Institute of Theoretical Physics of the Goethe Universität Frankfurt (Germany).Writing my first scientific work ’Band structure studies of graphene and modified graphene structures’, after understanding the techniques of density functional theory and many body problems."
        backgroundColor="white"
        textAlign="left"
        extras={{pdf: 'bachelorThesis.pdf', git: 'https://github.com/phd-dirk/Bachelor'}}
      />
    </Entry>
  </Timeline>
)

const Professional = () => (
  <Timeline>
    <Entry>
      <EntryPoint year={2019} />
      <h3>CYSAE</h3>
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
      <EntryPoint year={2019} />
      <h3>Alda</h3>
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
      <EntryPoint year={2019} />
      <h3>WeGoLoco</h3>
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
      <EntryPoint year={2019} />
      <h3>Eevents Fulda</h3>
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
      <EntryPoint year={2019} />
      <h3>Fulda Strategy Group</h3>
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
      <EntryPoint year={2019} />
      <h3>eMexs Marketing S.L.</h3>
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
      <EntryPoint year={2019} />
      <h3>Hornung Webdesign</h3>
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
  width: 70vw;
  height: 60px;
  margin: auto;
  position: relative;
  top: -30px;
`
const CtrlButton = styled.button`
  width: 50%;
  border-radius: ${props => props.left ? '6px 0px 0px 6px' : '0px 6px 6px 0px;'};
  color: rgb(45, 64, 81);
  font-size: 18px;
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
