import { useContext } from "react";
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { HeaderContainer } from "./styles";

interface HeaderProps {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: HeaderProps) {

  const { title } = useContext(ThemeContext);

  return(
    <HeaderContainer>
        <h1>COVID-19 in The World</h1>

        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          width={50}
          onColor='#c2847a'
          offColor='#909090'
        />
    </HeaderContainer>
  )
}