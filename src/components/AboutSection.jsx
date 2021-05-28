import React from "react";
import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from "./Button";
import AboutImg from "../assets/images/about-sec-img.png";
import styled from "styled-components";
import { Medias } from "../styles/Media";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__buttons {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  /* sectionTitle */
  .sectionTitle {
    text-align: left;
  }
  /* PText */
  .ptext {
    margin-top: 2rem;
    margin-left: 0;
  }

  /* Media Query */
  ${Medias.custom(950)} {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  ${Medias.tab} {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .buttonWrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }

    .sectionTitle {
      text-align: center;
    }
    .ptext {
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle subTitle="Let me introduce myself" Title="about me" />

          <PText text="I am a freelance website designer and developer from Chittagong, Bangladesh. I create professional websites. I love art and always try to show unique views to the audience through my design." />

          <div className="aboutSection__buttons">
            <Button className="buttonWrapper" btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>

        <div className="aboutSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
