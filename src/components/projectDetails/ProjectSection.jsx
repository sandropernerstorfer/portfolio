import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// Components
import Pill from '../Pill';
// Utils
import OpenNewTab from '../../assets/util/OpenNewTab';

function ProjectSection( project ) {  // name, desc, techs, image, screenshots, github, live

  function showImage(e){
    e.target.classList.add('image-visible');
  };

  return (
    <MainWrapper>
      <div className="headWrapper">
        <h3>{project.name}</h3>
        <img onLoad={showImage} src={project.image} alt={project.name} className="mainImage"/>
        <div className="techsContainer">
          {project.techs.map( tech => <Pill image={tech.image} text={tech.name} color={tech.color} key={tech.name}/>)}
        </div>
        <div className="linksContainer">
          <span onClick={() => OpenNewTab(project.github)}><FontAwesomeIcon icon={faCodeBranch}/> Code</span>
          { project.live && <span onClick={() => OpenNewTab(project.live)}><FontAwesomeIcon icon={faPlayCircle}/> Live</span>}
        </div>
      </div>
      <div className="projectDetails">
        <div className="description">
          {project.desc}
        </div>
        <div className="screenshots">
          {project.screenshots.map( image => <img src={image} alt={image} key={image}/>)}
        </div>
      </div>
    </MainWrapper>
  )
};

// Styled Components
const MainWrapper = styled.main`
  padding-top: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .headWrapper{
    margin: 3rem 0;
    width: 100%;
    max-width: 600px;
    padding: 1rem;

    .mainImage{
      opacity: 0;
      transition: all 1.5s;
    }

    .image-visible{
      opacity: 1;     // icon bug
    }

    h3{
      display: none;
      text-align: center;
      margin-bottom: 2rem;
      color: #444;
      font-weight: 500;

      @media (max-width: 700px){
        display: block;
      }
    }
  }

  .mainImage{
    width: 100%;
    margin-bottom: 1rem;
  }

  .techsContainer{
    border: 2px solid #ecececbe;
    padding: 1rem;
    border-width: 2px 0;
    margin-top: 1rem;
    text-align: center;
  }
  
  .linksContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 1.5vw;
    margin-top: 3.5rem;

    span{
      border: 1px solid #e6e6e6;
      background-color: hsl(0, 0%, 99%);
      text-align: center;
      width: 5.4rem;
      padding: 5px 10px;
      border-radius: 12px;
      font-weight: 200;
      cursor: pointer;
      transition: all .2s;

      @media (hover:hover){
        &:hover{
          background-color: hsl(0, 0%, 96%);
        }
      }

      &:nth-child(1) svg{color: var(--orange)}
      &:nth-child(2) svg{color: var(--green)}
    }
  }

  .projectDetails{
    box-shadow: 0px -9px 15px -7px #d1cfcf;
    padding: 4rem 1rem;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .description{
      margin-bottom: 4rem;
      max-width: 950px;
      line-height: 2rem;
      font-weight: 400;
      color: #444;
      border: 2px solid #eeeeee;
      padding: 1rem 0;
      border-width: 2px 0;
    }

    .screenshots{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 2rem;
      width: 100%;

      img{
        max-width: 400px;
        width: 100%;
        height: auto;
        box-shadow: 0 0 20px -7px #ccc;
      }
    }
  }
`;

export default ProjectSection;