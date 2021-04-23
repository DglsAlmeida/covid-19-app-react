import styled from 'styled-components';

export const HeaderContainer = styled.header`
 height: 100px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-left: 20px;
 background: ${props => props.theme.colors.primary};
 border-bottom: 1px solid var(--gray-800);

 div {
   margin-right: 40px;
 }

 h1 {
    font-size: 50px;
  }
`;
