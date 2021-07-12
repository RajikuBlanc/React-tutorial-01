import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import { MdSearch } from 'react-icons/md';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';
import { Medias } from '../styles/Media';

const ProjectsStyle = styled.div`
  padding: 10rem 0;
  .projects__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchbar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    border-radius: 6px;
    color: var(--black);
    outline: none;
  }
  .projects__searchbar .searchIcon {
    position: absolute;
    width: 20px;
    right: 10px;
  }
  .projects__searchbar .searchIcon path {
    color: var(--deep-dark);
  }
  ${Medias.tab} {
    .projects__searchbar,
    .projects__searchbar form,
    .projects__searchbar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectsData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() => ProjectInfo.filter(item => item.name.toLowerCase().match(searchText.toLowerCase())));
  }, [searchText]);

  const handleChange = e => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectInfo);
    }
  };

  return (
    <ProjectsStyle>
      <div className="container">
        <SectionTitle subTitle="some of my recent works" Title="Projects" />
        <div className="projects__searchbar">
          <form>
            <input type="text" value={searchText} onChange={handleChange} placeholder="Project Name" />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__list">
          {projectData.map(item => (
            <ProjectItem img={item.img} title={item.name} desc={item.desc} key={item.id} />
          ))}
        </div>
      </div>
    </ProjectsStyle>
  );
}
