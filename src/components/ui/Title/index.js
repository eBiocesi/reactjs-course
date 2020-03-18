import React from 'react';
import { StyledContainer } from './style';

const Title = props => {
  return (
    <StyledContainer>
      <h1>{props.title}</h1>
    </StyledContainer>
  );
};

export default Title;
