import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import makeCarousel from "react-reveal/makeCarousel";
import withReveal from "../components/withReveal";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import {
  faFilePdf,
  faLink,
  faCertificate
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import { increment, company } from "../redux/actions";
import { tagColors } from "../components/tags";
import Slider from "react-slick";

const Card = props => {
  const dispatch = useDispatch();
  return (
    <StyledGrid {...props}>
      <StyledCard {...props}>
        <svg width="0" height="0">
          <linearGradient id="lgrad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#bae7f1", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#65d2e9", stopOpacity: 1 }}
            />
          </linearGradient>
        </svg>
        {props.tags && (
          <TagSlider
            infinite={false}
            slidesToShow={4}
            variableWidth={true}
            swipeToSlide={true}
            speed={500}
          >
            {props.tags.map(tag => (
              <Tag tag={tag} key={tag}>
                {tag}
              </Tag>
            ))}
          </TagSlider>
        )}
        {props.header && <h4>{props.header}</h4>}
        {props.icon && <StyledIcon icon={props.icon} />}
        <h1>{props.title}</h1>

        {props.subtitle && <ReactMarkdown source={props.subtitle} />}
        {props.timeline === "professional" && (
          <Link href="/portfolio">
            <PortfolioA onClick={() => dispatch(company(props.company))}>
              Show projects
            </PortfolioA>
          </Link>
        )}
        {displayAttachements(props)}
      </StyledCard>
    </StyledGrid>
  );
};
Card.propTypes = {
  backgroundColor: PropTypes.string,
  dark: PropTypes.bool,
  full: PropTypes.bool,
  gradient: PropTypes.number,
  textAlign: PropTypes.string
};

const displayAttachements = entry => {
  return (
    <Attachements>
      {entry.certificates &&
        entry.certificates.map(e => (
          <a key={e} href={e} target="_blank">
            <FontAwesomeIcon icon={faCertificate} />
          </a>
        ))}
      {entry.pdfs &&
        entry.pdfs.map(e => (
          <a key={e} href={`static/attachements/${e}`} download>
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        ))}
      {entry.gits &&
        entry.gits.map(e => (
          <a key={e} href={e} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        ))}
      {entry.youtubeLinks &&
        entry.youtubeLinks.map(e => (
          <a key={e} href={e} target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        ))}
      {entry.webs &&
        entry.webs.map(e => (
          <a key={e} href={e} target="_blank">
            <FontAwesomeIcon icon={faLink} />
          </a>
        ))}
    </Attachements>
  );
};
const addLineBreaks = string =>
  string.split("\n").map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ));

const StyledGrid = styled.div`
  height: 100%;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;

  @media (min-width: 767px) {
    ${props =>
      props.firstHalf &&
      `
      grid-column-start: 1;
      grid-column-end: 2;
    `}
    ${props =>
      props.secondHalf &&
      `
      grid-column-start: 2;
      grid-column-end: 3;
    `}
  }
`;
const StyledCard = withReveal(
  styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    algin-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 20px 50px 20px;
    margin-bottom: 20px;
    text-align: ${props => (props.textAlign ? props.textAlign : "center")};
    border-radius: 12px;
    blockcolor: ${props => (props.dark ? "white" : "black")};
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px 0px;
    background-color: ${props =>
      props.backgroundColor ? props.backgroundColor : "rgb(249, 250, 252)"};
    ${function(props) {
      switch (props.gradient) {
        case 1:
          return `background-image: linear-gradient(261.3deg, rgb(251, 242, 232) 0%, rgb(255, 237, 217) 99.84%);`;
        case 2:
          return `background-image: linear-gradient(24.28deg, rgb(195, 228, 223) 0%, rgb(237, 250, 242) 100.94%);`;
        case 3:
          return `background-image: linear-gradient(335.08deg, rgb(149, 187, 206) -0.56%, rgb(197, 208, 230) 46.04%, rgb(231, 228, 246) 100%);`;
        default:
          return "";
      }
    }}
    > h1 {
      font-size: 1.5rem;
      margin: 0;
      margin-bottom: 25px;
    }
    > h4 {
      margin: 0;
      margin-bottom: 25px;
    }
    > p {
      margin: 0;
      font-family: FontLight;
      font-size: 1.2rem;
    }

    @media (min-width: 767px) {
      padding: 40px 40px 100px 40px;
    }
  `,
  <Fade />
);

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  margin: 0 auto 16px auto;
  path {
    fill: url(#lgrad);
  }

  @media (min-width: 767px) {
    font-size: 100px;
  }
`;

const Attachements = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  > a {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
    margin-left: 10px;
  }

  @media (min-width: 767px) {
    bottom: 40px;
    right: 30px;

    > a {
      font-size: 2rem;
      margin-left: 20px;
    }
  }
`;
const PortfolioA = styled.a`
  position: absolute;
  bottom: 15px;
  cursor: pointer;

  @media (min-width: 767px) {
    bottom: 40px;
  }
`;
const TagSlider = styled(Slider)`
  margin-bottom: 16px;
`;
const Tag = styled.div`
  background-color: ${({ tag }) =>
    tag in tagColors ? tagColors[tag] : "black"};
  color: white;
  padding: 5px;
  display: inline-block;
  margin: 3px;
  border-radius: 6px;
  font-size: 0.9rem;
  width: auto !important;
`;

export default Card;
