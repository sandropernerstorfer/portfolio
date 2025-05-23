import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// Components
import LinkContainer from './LinkContainer';
import Pill from '../Pill';
// Router
import {useHistory} from 'react-router-dom';
// Redux
import {useDispatch} from 'react-redux';
import {setScrollPosition} from '../../state/projectsState';

function SpotlightProject( project ) {
  const history = useHistory();
  const dispatch = useDispatch();

  function showImage(e){
    e.target.classList.add('image-visible');
  };

  return (
    <ProjectContainer>
      <div className="projectHead">
        <h1>{project.name}</h1>
        <LinkContainer route={project.route} github={project.github} live={project.live} />
      </div>
      <div 
        onClick={() => {
          dispatch(setScrollPosition(window.scrollY));
          history.push(project.route);
        }
        }
        className="imageContainer">
        <img onLoad={showImage} src={process.env.PUBLIC_URL + project.image} alt={project.name + ' main image'} />
        <span><FontAwesomeIcon icon={faInfoCircle}/></span>
      </div>
      <div className="techContainer">
          { project.techs.map( tech => <Pill key={tech.name+'_pill'} text={tech.name} color={tech.color}/>) }
      </div>
    </ProjectContainer>
  )
}

// Styled Components
const ProjectContainer = styled.div`
  margin-bottom: 5rem;
  box-shadow: 0 0 15px 1px #e7e7e7;
  border-radius: 12px;
  padding: 1rem;
  max-width: 40rem;
  min-width: 40rem;

  @media (max-width: 1350px){
    min-width: 0;
  }

  .projectHead{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    @media ( max-width: 380px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    h1{
      color: #555;
      font-weight: 600;
      font-size: 1.3rem;
      flex: 1;
    }
  }
  
  .imageContainer{
    position: relative;
    cursor: pointer;

    width: 608px;
    height: 308px;

    @media ( max-width: 680px){
      width: 100%;
      height: 100%;
    }

    img{
      max-width: 40rem;
      width: 100%;
      height: auto;
      min-height: 15rem;
      object-fit: cover;
      opacity: 0;
      transition: all 1.5s;
    }

    .image-visible{
      opacity: 1;
    }

    span{
      svg{
        font-size: 34px;
        color: var(--blue);
        background-color: #ffffffd1;
        border-radius: 23px;
      }
      
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff67;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all .2s;

      @media (hover:hover){
        &:hover{
          opacity: 1;
        }
      }
    }
  }


  .techContainer{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    padding: 10px 5px;
    border: 1px solid #e6e6e6;
    border-width: 1px 0;
  }
`;

export default SpotlightProject;
