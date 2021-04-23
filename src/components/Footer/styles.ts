import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 1px solid var(--gray-800);
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary};

  h1 {
    padding-top: 50px;
  }
`;  

export const Content = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ul { 
    list-style-type: none;
    margin-bottom: 20px;
  }

  div + div {
    margin-left: 50px;
  }

  li { 
    font-size: 30px;
    line-height: 40px;
  }
`;
