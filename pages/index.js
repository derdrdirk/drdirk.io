import { Fragment } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

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
  grid-template-rows: 500px 500px;
  justify-content: center;
  grid-column-gap: 30px;
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

const LinkButton = styled.a`
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
    <Fragment>
      <Header>
        <Description>
          <h1>I am Dirk Hornung,</h1>
          <p>a recently graduated theoretical physics PhD.</p>
          <LinkButton>Discover me</LinkButton>
        </Description>
        <ProfilePic>
          <img src="./static/images/dirk.jpg"/>
        </ProfilePic>
      </Header>
      <Content>
        <Card title="hola 1"/>
        <Card title="hola 2"/>
        <Card title="hola 3" fulli="j"/>
      </Content>
    </Fragment>
  )
}

export default Home;
