import React, { Component } from "react";
import HeroImg from "../assets/images/hero.png";
import PText from "./PText";
import Button from "./Button";
import socialMediaArrow from "../assets/images/social-media-arrow.svg";
import scrollDownArrow from "../assets/images/scroll-down-arrow.svg";

export default class HeroSection extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span>Ayan Khan</span>
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
            <div className="hero_social_text">
              <ul>
                <li>
                  <a href="#">FB</a>
                </li>
                <li>
                  <a href="#">TW</a>
                </li>
                <li>
                  <a href="#">LI</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>SCROLL</p>
            <img src={scrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
