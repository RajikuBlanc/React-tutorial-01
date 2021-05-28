import React, { Component } from "react";
import HeroImg from "../assets/images/hero.png";
import PText from "./PText";
import Button from "./Button";
import socialMediaArrow from "../assets/images/social-media-arrow.svg";
import scrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { Medias } from "../styles/Media";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
  }
  .hero__name {
    font-size: 7rem;
    font-family: "Montserrat SemiBold";
    color: var(--white);
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--white);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 28px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  ${Medias.tab} {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      max-height: 22px;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default class HeroSection extends Component {
  render() {
    return (
      <HeroStyles>
        <div className="hero">
          <div className="container">
            <h1 className="hero__heading">
              <span>Hello, This is</span>
              <span className="hero__name">Ayan Khan</span>
            </h1>
            <div className="hero__img">
              <img src={HeroImg} alt="" />
            </div>
            <div className="hero__info">
              <PText
                text="I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experiences for the
              people."
              />
              <Button btnLink="/projects" btnText="see my works" />
            </div>
            <div className="hero__social">
              <div className="hero__social__indicator">
                <p>Follow</p>
                <img src={socialMediaArrow} alt="" />
              </div>
              <div className="hero__social__text">
                <ul>
                  <li>
                    <a href="/">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiOutlineInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero__scrollDown">
              <p>Scroll</p>
              <img src={scrollDownArrow} alt="" />
            </div>
          </div>
        </div>
      </HeroStyles>
    );
  }
}
