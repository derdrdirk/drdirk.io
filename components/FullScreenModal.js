import React, {Fragment} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import ReactMarkdown from 'react-markdown'


export default ({close, title, description, images, attachements, tags}) => (
  <FullScreen onClick={(e) => {
    if(e.target === e.currentTarget)
      close()
  }}>
    <Container>
      <Close onClick={() => close()}>X</Close>
      <Content>
        <Left>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images && images.map((src) => <StyledImg key={src} src={`/static/images/${src}`} /> )}
          </Slider>
        </Left>
        <Right>
          <h1>{title}</h1>
          <ReactMarkdown source={description}/>
          {attachements && (
            <Fragment>
              <h3 style={{display: 'inline'}}>Attachements:</h3>
              {attachements.map(
                (attachement) =>
                  <Link href={`/static/attachements/${attachement}`} download>
                    {attachement}
                  </Link>
              )}
            </Fragment>
          )}
          {tags && (
            <TagList>
              {tags.map((tag) => <Tag>{tag}</Tag>)}
            </TagList>
          )}
        </Right>
      </Content>
    </Container>
  </FullScreen>
)

const FullScreen = styled.div`
  background-color: rgba(255,255,255,0.93);
  padding: 40px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
`

const Left = styled.div`
  width: 40%;
  max-width: 400px;
  height: 80%;
  margin-right: 20px;
`

const Right = styled.div`
  width: 59%;
  height: 100%;
`

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Link = styled.a`
  color: #0070f3;
  &::before{
    content: ' '
  }
`

const TagList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Tag = styled.li`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px 0px;
  padding: 10px;
  font-family: FontRegular;
  font-weight: 400;
  font-size: 16px;
  background-color: 'white';
  margin: 0 7px 7px 0;
`

const Close = styled.button`
  color: ${(props) => props.theme.colors.primary};
  border: 0;
  font-size: 30px;
  position: absolute;
  right: 30px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.primaryHover};
  }
`

const Container = styled.div`
  position: relative;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px 0px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

`
