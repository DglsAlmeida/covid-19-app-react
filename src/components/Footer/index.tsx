import { Content, FooterContainer } from "./styles";

export function Footer() {
  return(
    <FooterContainer>
        <h1>STAY SAFE AT HOME</h1>
      <Content>
          <div>
            <ul>
              <li>STAY</li>
              <li>HOME</li>
              <li>IF SICK</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>WASH</li>
              <li>YOUR</li>
              <li>HANDS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>COVER</li>
              <li>YOUR</li>
              <li>COUGH</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>AVOID</li>
              <li>CROWDED</li>
              <li>SPACES</li>
            </ul>
          </div>
      </Content>
    </FooterContainer>
  )
}