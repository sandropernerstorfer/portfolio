import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import LinkContainer from './LinkContainer';
import Pill from '../Pill';

function SpotlightProject( project ) {
  return (
    <ProjectContainer>
      <div className="projectHead">
        <h1>{project.name}</h1>
        <LinkContainer route={project.route} github={project.github} live={project.live} />
      </div>
      <img src={process.env.PUBLIC_URL + project.image} alt={project.name + ' main image'} />
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
  
  img{
    max-width: 40rem;
    width: 100%;
    height: auto;
    min-height: 15rem;
    object-fit: cover;
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
    background-color: hsl(0, 0%, 99%);
  }
`;

export default SpotlightProject;