import styled from 'styled-components';

export const HeaderContainer = styled.header`
 height: 100px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-left: 20px;
 background: ${props => props.theme.colors.primary};

 div {
   margin-right: 40px;
  
    span {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        height: 30px;
      }
    }

 }

 h1 {
    font-size: 50px;
  }
`;
