import React from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Medias } from '../styles/Media';

SwiperCore.use([Navigation, Autoplay]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__list {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    left: auto;
    top: 0;
    transform: translateY(50%);
    right: 60px;
    z-index: 10;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  ${Medias.custom(640)} {
    .projects__list {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
    }
  }
`;

export default function ProjectSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subTitle="some of my recent works" Title="Projects" />
        <div className="projects__list">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false
            }}
            breakpoints={{
              1166: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              640: {
                slidesPerView: 2
              }
            }}
          >
            {projects.map((project, index) => {
              // eslint-disable-next-line array-callback-return
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem img={project.img} title={project.name} desc={project.desc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
