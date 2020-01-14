import React from 'react'
import Section from '../globals/Section';
import Title from '../globals/Title';
import aboutImg from '../../images/aboutBcg.jpeg';
import { setRem, setBorder, setColor, setLetterSpacing, media } from '../../styles';
import { PrimaryBtn } from '../globals/Buttons'
import styled from 'styled-components';
const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="about us" />
          <p>Eos rebum clita duo ea ut, magna justo justo duo no consetetur. Lorem ipsum ea tempor sit rebum, sed sed ea kasd ipsum clita dolor est dolore, magna dolores rebum.  </p>
          <PrimaryBtn>Read More</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  )
}

const AboutCenter = styled.div`
  .about-img, .about-info {
    padding:${setRem(30)};
  }
  .about-img {
    img {
      width:100%;
      display:block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }

  .about-info{
     p{
       ${setLetterSpacing(3)}
     }
  }

  width:90vw;
  margin:0 auto;
  ${media.large`
  .about-img, .about-info {
    padding:${setRem(0)};
  }
    width:100vw;
    max-width:1170px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap:${setRem(20)};
    .about-img,.about-info {
      align-self:center;
    }

    .about-info {
      p{
        width:80%;
      }
    }
  `};
`;
export default About
