import React, { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { faRocket, faLayerGroup, faAtom, faScrewdriver, faRobot} from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

const Header = styled.section`
  height: 100vh;
  background-color: #1c1d23;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
`
const ProfilePic = styled.div`
  background-color: white;
  border-radius: 8px;
  height: 80vh;
  padding: 8px 8px 0 8px;
  margin: 50px;

  img {
    height: 100%;
  }
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

function Home() {
  return (
    <Layout>
      <Header>
        <Description>
          <h1>I am Dirk Hornung,</h1>
          <p>a recently graduated theoretical physics PhD.</p>
          <LinkButton href="/timeline"><a>Discover me</a></LinkButton>
        </Description>
        <ProfilePic>
          <img src="./static/images/dirk.jpg"/>
        </ProfilePic>
      </Header>
      <Content>
        <Card title="Entrepreneur" subtitle="test 1" icon={faRocket} full gradient={3}  />
        <Card title="Full-Stack Developer" subtitle="test 1" icon={faLayerGroup} />
        <Card title="Blockchain Developer" subtitle="test 1" icon={faEthereum} />
        <Card title="PhD in Theoretical Physics" subtitle="test 1" icon={faAtom}
          full gradient={2} />
        <Card title="Prototyping" subtitle="test 1" icon={faScrewdriver} />
        <Card title="Artificial Intelligence" subtitle="test 1" icon={faRobot} />
      </Content>
    </Layout>
  )
}

export default Home;
