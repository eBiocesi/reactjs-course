import Styled from 'styled-components';

export const StyledContainer = Styled.div`
    h1{
      color: red;
      font-size: 60px;
      transition-duration: 1s;
    }
    :hover > h1{
      color: purple
    }
`;
