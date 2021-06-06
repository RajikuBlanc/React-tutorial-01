import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import SectionTitle from './SectionTitle';
import PText from './PText';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import testimonials from '../assets/data/testimonials';
import { useState } from 'react';

const TestimonialSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .ptext {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      width: fit-content;
      margin: 0 0.5rem;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
  .fade-enter-active {
    transform: scale(1);
    opacity: 1;
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
`;

export default function TestimonialSection() {
  const [ActiveIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[ActiveIndex];

  function handleNext() {
    if (ActiveIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(oldIndex => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (ActiveIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex(oldIndex => oldIndex - 1);
    }
  }

  return (
    <TestimonialSectionStyle>
      <div className="container">
        <SectionTitle subTitle="see what our clients say about us" Title="Testimonials" />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <p className="testimonial__title">
                  {activeSlide.title}
                  <br />
                  {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div className="prev" onClick={handlePrev} role="button" tabIndex={0} onKeyDown={handlePrev}>
            <MdArrowBack />
          </div>
          <div className="next" onClick={handleNext} role="button" tabIndex={0} onKeyDown={handleNext}>
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialSectionStyle>
  );
}
