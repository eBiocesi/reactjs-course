import Styled from 'styled-components';

export const StyledContainer = Styled.div`
    border: 2px black solid;
    padding: 20px;
    transition-duration: 500ms;
    h1{
      color: ${props => (props.success ? 'green' : 'red')};
      font-size: 60px;
      transition-duration: 1s;
    }
    :hover{
      transform: scale(0.7);
      transition-duration: 500ms;
    }
    :hover > h1{
      color: purple
    }
`;
