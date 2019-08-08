import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import ReactMarkdown from 'react-markdown'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


export default ({title, description, images}) => (
  <FullScreen>
    <Left>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {images.map((src) => <StyledImg key={src} src={`/static/images/${src}`} /> )}
      </Slider>
    </Left>
    <Right>
      <h1>{title}</h1>
      <ReactMarkdown source={description}/>
    </Right>
  </FullScreen>
)

const FullScreen = styled.div`
  // filter: blur(20px);
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
  display: flex;
  justify-content: center;
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
