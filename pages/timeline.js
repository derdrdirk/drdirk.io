import React, {useState} from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import styled from 'styled-components'
import portfolio from '../components/portfolioList.js'

const circleSize = 55

export default () => {
  const [curriculum, setCurriculum] = useState('professional')
  const chooseCurriculum = (curriculum) => () => setCurriculum(curriculum)

  // let timeline
  // switch(curriculum) {
  // case 'academic':
  //   timeline = <Academic />
  //   break
  // case 'professional':
  //   timeline = <Professional />
  //   break
  // default: timeline = <Interests />;
  // }

  const list = filterSortPortfolio(curriculum)

  return (
    <Layout>
      <Header>
        <h1>Curriculum Vitae</h1>
        <h3>Academic and Professional</h3>
      </Header>
      <Control>
        <CtrlButton left onClick={chooseCurriculum('academic')} active={curriculum === 'academic'}>Academic</CtrlButton>
        <CtrlButton center onClick={chooseCurriculum('professional')} active={curriculum === 'professional'}>Professional</CtrlButton>
        <CtrlButton right onClick={chooseCurriculum('interests')} active={curriculum === 'interests'}>Interests</CtrlButton>
      </Control>
      <TimelineContainer>
        <Timeline>
          {list.map((entry) => (
            <Entry>
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
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    })
}

const Professional = () => (
  <Timeline>
    <Entry>
      <EntryPoint year={2019} />
      <h3><a href="https://cysae.com" target="_blanc">CYSAE Serverla</a></h3>
      <h4>CTO</h4>
      <p>
        CYSAE is a Legaltech with a focus on Blockchain. I was responsible for a team of developers, the technological architecture and its execution.
      </p>
      <Card
        title="Utility Token for Cuatre Casas"
        subtitle="Created a customised EIP-20 token for Cuatre Casas, with an Express REST API, so that their clients are able to buy legal services with a cryptocurrency. The token has also been tested in the spanish Alastria chain."
        backgroundColor="white"
        textAlign="left"
        extras={{git: 'https://gitlab.com/CYSAE/stamper', web: 'https://wallet.cuatrecasas.com/login'}}
      />
      <Card
        title="Stamper"
        subtitle="Created a React web app that immutable certifies documents with the help of the Ethereum blockchain. The backend is based on GraphQL, Prisma and a MySQL database hosted as ECS in AWS."
        backgroundColor="white"
        textAlign="left"
        extras={{git: 'https://gitlab.com/CYSAE/cuatrecasas', web: 'http://stamper.cysae.com/'}}
      />
      <Card
        title="Boardchain"
        subtitle="Started the development of a blockchain solution to democratise companies by allowing transparent and remote voting processes in board and general meetings."
        backgroundColor="white"
        textAlign="left"
        extras={{git: 'https://gitlab.com/CYSAE/stamper', web: 'https://cysae.com/boardchain/'}}
      />
    </Entry>
    <Entry>
      <EntryPoint year={2018} />
      <h3>Alda</h3>
      <h4>CTO & Co-Founder</h4>
      <p>
        Fintech focused on applying machine learning techniques to financial services. My primary work has to develop the NLP technology and pitch the Startup. <br />
        Awards:
        <ul>
          <li>Fintech Wars 2018 1rst Prize (500€ prize)</li>
          <li>2018 MetLife Foundation Inclusion Plus Competition (4K€ prize)</li>
          <li>Best 2017 Barcelona Startup Week by InnoVentures</li>
          <li>Best HackUPC 2017 by ImaginBank</li>
          <li>Accelerated by Esade's Eworks Accelerator and Fiboost of F. Iniciativas</li>
        </ul>
      </p>
      <Card
        title="Chatbot"
        subtitle="Developing a Fintech chatbot that works as your personal financial advisor. The Chatbot is based on Dialogflow and is connected to your bank account via the Saltedge API.
        The backend consists serverless Flask and Express AWS Lambdas connected to an AWS RDS and the Facebook API to communicate to our clients via Messenger."
        backgroundColor="white"
        textAlign="left"
        extras={{git: 'https://github.com/orgs/Aldabot/dashboard', youtube: ['https://www.youtube.com/watch?v=I2z_un5Fjmk&t=11s', 'https://www.youtube.com/watch?v=ForNMZ1ulaI']}}
      />
      <Card
        title="Chatbot UI"
        subtitle="Writing a Chatbot UI similar to Messenger, which rich messages as an react/ redux application. The interface has been made compatible with Wordpress and Life Ray websites."
        backgroundColor="white"
        textAlign="left"
        extras={{git: 'https://github.com/Aldabot/chatbot-ui', web: 'https://www.aiguesdebarcelona.cat/es/home'}}
      />
    </Entry>
    <Entry>
      <EntryPoint year={2017} />
      <h3>FuldaCity</h3>
      <h4>CEO & Co-Founder</h4>
      <Card
        title="FuldaCity Cordova App"
        subtitle="Created an Meteor App, which lists local events, restaurants and bars on a convenient map. The frontend was given as a React app, which was connected to a MongoDB within the Meteor framework."
        backgroundColor="white"
        textAlign="left"
        extras={{git: 'https://github.com/orgs/Aldabot/dashboard', youtube: ['https://www.youtube.com/watch?v=I2z_un5Fjmk&t=11s', 'https://www.youtube.com/watch?v=ForNMZ1ulaI']}}
      />
    </Entry>
    <Entry>
      <EntryPoint year={2017} />
      <h3>WeGoLoco</h3>
      <h4>CTO and Co-Founder</h4>
      <Card
        title="WeGoLoco iOS App"
        subtitle="Created an nativ iOS app coded in Swift, which lets local commerces public their products in a tinder like platform."
        backgroundColor="white"
        textAlign="left"
        extras={{git: 'https://github.com/Knowledge91/WeGoLoco-iOS'}}
      />
    </Entry>
    <Entry>
      <EntryPoint year={2017} />
      <h3>B2Commerce</h3>
      <h4>Wordpress specialist and PHP Developer</h4>
      <p>Customising WooCommerce shops and Wordpress intranets, while translating content into German, English, Spanish and French.</p>
    </Entry>
    <Entry>
      <EntryPoint year={2016} />
      <h3>eMexs Marketing S.L.</h3>
      <h4>PHP Developer</h4>
      <p>Helping in a hotel revenue management system based on codeigniter and on a marketing dashboard for hotels.</p>
    </Entry>
    <Entry>
      <EntryPoint year={2013} />
      <h3>Fulda Strategy Group</h3>
      <h4>Partner</h4>
      <Card
        title="IT Consulting"
        subtitle="Consulting in SAP solutions and creating a booking software for local tennis courts."
        backgroundColor="white"
        textAlign="left"
        extras={{web: 'https://fulda-strategy.de', web: 'https://tennisspot.de'}}
      />
    </Entry>
    <Entry>
      <EntryPoint year={2010} />
      <h3>Eevents Fulda</h3>
      <h4>CEO and Co-Founder</h4>
      <Card
        title="Weddings and Birthdays"
        subtitle="Renting and organising parties, while often being the DJ. Building the sound system by ourselves. Leading a team of five founders."
        backgroundColor="white"
        textAlign="left"
        extras={{web: 'https://eevents-fulda.de'}}
      />
    </Entry>
    <Entry>
      <EntryPoint year={2009} />
      <h3>Hornung Webdesign</h3>
      <h4>CEO & Founder</h4>
      <Card
        title="Webdesign Agency"
        subtitle="Selling Wordpress pages and WooCommerce shops. Gathering experience with HTML, CSS, PHP, Javascript and MySQL as well as Laravel and JQuery."
        backgroundColor="white"
        textAlign="left"
        extras={{web: 'http://www.hornung-webdesign.de'}}
      />
    </Entry>
  </Timeline>
)

const Interests = () => (
  <Timeline>
    <Entry>
      <EntryPoint year={2019} />
      <h3><a href="https://cysae.com" target="_blanc">Deep Learning</a></h3>
      <h4>Deeplearning.ai</h4>
      <p>
        Started Andrew Ng second Machine Learning course on Coursera.
      </p>
    </Entry>
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
  width: 70vw;
  height: 60px;
  margin: auto;
  margin-top: -30px;
  z-index: 1;
`
const CtrlButton = styled.button`
  width: 33.33%;
  border-radius: ${props => {
    if(props.left) return '6px 0px 0px 6px'
    if(props.right) return '0px 6px 6px 0px'
    return '0'
  }};
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
  margin-top: -30px;
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
