import React from 'react';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import { Medias } from '../styles/Media';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .about__section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .about__left {
    flex: 3;
  }
  .about__subTitle {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__title {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .ptext {
      text-align: left;
      max-width: 100%;
    }
  }

  .about__right {
    flex: 2;
    img {
      border: 1px solid var(--gray-1);
    }
  }
  .about__infoList {
    margin-top: 15rem;
  }
  .about__infoItem {
    margin-bottom: 10rem;
  }
  .about__infoTitle {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  ${Medias.tab} {
    padding: 10rem 0;
    .about__section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subTitle {
      font-size: 1.8rem;
    }
    .about__title {
      font-size: 2.8rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="about__section">
          <div className="about__left">
            <p className="about__subTitle">
              Hi, I am <span>Ayan Khan</span>
            </p>
            <h2 className="about__title">A freelance Web developer</h2>
            <div className="about__info">
              <PText>
                I am from chittagong, Bangladesh. A place of beauty and nature. Since my childhood, i love art and
                design. I always try to design stuff with my unique point of view. I also love to create things that can
                be usefull to others.
                <br /> <br />
                I started coding since I was in high school. Coding is also an art for me. I love it and now I have the
                opportunity to design along with the coding. I find it really interesting and I enjoyed the process a
                lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost everything is becoming better than ever. It is
                time for us to create more good stuff that helps the world to become a better place.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="about__right">
            <img src={AboutImg} alt="AboutImg" />
          </div>
        </div>
        <div className="about__infoList">
          <div className="about__infoItem">
            <h2 className="about__infoTitle">Education</h2>
            <AboutInfoItem ItemTitle="School" items={['Nasirabad Govt. High School, Chattogram']} />
            <AboutInfoItem ItemTitle="Collage" items={['BAF Shaheen College Chattogram']} />
            <AboutInfoItem ItemTitle="Varsity" items={['University Of Chitiagong']} />
          </div>
          <div className="about__infoItem">
            <h2 className="about__infoTitle">My Skills</h2>
            <AboutInfoItem ItemTitle="FrontEnd" items={['HTML', 'CSS', 'JavaScript', 'REACT']} />
            <AboutInfoItem ItemTitle="BackEnd" items={['Node', 'Express', 'PHP']} />
            <AboutInfoItem ItemTitle="Design" items={['Photoshop', 'After Effects', 'Figma']} />
          </div>
          <div className="about__infoItem">
            <h2 className="about__infoTitle">Experiences</h2>
            <AboutInfoItem ItemTitle="2010-2012" items={['junior developer at web Cifar']} />
            <AboutInfoItem ItemTitle="2012-2016" items={['Front end developer at web Cifar ']} />
            <AboutInfoItem ItemTitle="2016-" items={['Freelance web Developer']} />
          </div>
        </div>
        <ContactBanner />
      </div>
    </AboutPageStyle>
  );
}
