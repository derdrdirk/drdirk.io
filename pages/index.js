import React, { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { faRocket, faLayerGroup, faAtom, faScrewdriver, faRobot} from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'


export default () => {
  return (
    <Layout>
      <Header>
        <Description>
          <h1>I am Dr. Dirk Hornung,</h1>
          <p>a recently graduated theoretical physics PhD. I am an entrepreneur, full stack developer, blockchain architect and prototyper. I have a passion for discovering new things. Lately I am studying Deep Learning and build IOT devices.</p>
          <LinkButton href="/timeline"><a>Discover me</a></LinkButton>
        </Description>
        <Video
          src="https://www.youtube.com/embed/Om1DGAa7Cgw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
      </Header>
      <Content>
        <Card title="Entrepreneur" subtitle="Founding companies since 14." icon={faRocket} full gradient={3}  />
        <Card title="Full Stack Developer" subtitle="Need an App?" icon={faLayerGroup} />
        <Card title="Blockchain Developer" subtitle="Ethereum and Smart Contracts!" icon={faEthereum} />
        <Card title="PhD in Theoretical Physics" subtitle="Strong analytic thinking." icon={faAtom}
          full gradient={2} />
        <Card title="Prototyping" subtitle="I love building things!" icon={faScrewdriver} />
        <Card title="Artificial Intelligence" subtitle="Machines > Humans." icon={faRobot} />
      </Content>
    </Layout>
  )
}

const Header = styled.section`
  height: 100vh;
  background-color: #1c1d23;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Content = styled.section`
  width: 95%;
  max-width: 1100px;
  margin: 50px auto 50px auto;
  display: grid;
  grid-template-columns: calc(50% - 15px) calc(50% - 15px);
  justify-content: center;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

const Description = styled.div`
  font-family: FontLight;
  margin: 50px;
  width: 25vw;

  > p {
    font-size: 1.2rem;
  }
`
const Video = styled.iframe`
  width: 55vw;
  height: calc(55vw/560 * 315);
  border: none;
  box-shadow: rgba(255, 255, 255, 0.18) 0px 4px 6px 0px;
`

const LinkButton = styled(Link)`
  display: inline-block;
  font-family: FontRegular;
  font-weight: 600;
  font-size: 15;
  letter-spacing: 0.5px;
  line-height: 22.5px;
  padding: 10px;
  margin-top: 25px;
  border-radius: 3px;
  background: linear-gradient(130deg, rgb(0, 180, 230), rgb(0, 240, 224)) transparent;
`
