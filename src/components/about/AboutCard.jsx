import React from 'react';
// Styling
import styled from 'styled-components';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutCard({ icon, heading, body }) {
  return (
    <Card>
        <FontAwesomeIcon icon={icon} />
        <h4>{heading}</h4>
        <p>{body}</p>
    </Card>
  )
};

// Styled Components
const Card = styled.div`
  max-width: 20rem;
  min-width: 260px;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  text-align: center;
  padding: 2rem 1rem;
  box-shadow: 0 0 14px -5px #a39f9fa9;

  svg{
    font-size: 5rem;
    color: #fff;
    padding: .7rem;
    border-radius: 20px;
    background-color: var(--primary);
  }

  h4{
    margin: 1rem 0;
    font-weight: 500;
    color: var(--primaryLight);
  }

  p{
    line-height: 1.5rem;
    font-weight: 400;
    font-size: 0.9rem;
  }
`;

export default AboutCard;