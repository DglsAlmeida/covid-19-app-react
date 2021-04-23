import { BarChart } from './components/BarChart';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import { useCallback } from 'react';
import usePersistedState from './hooks/usePersistedState';

export function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme.title])

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <BarChart />
      <Table />
      <Footer />
    </ThemeProvider>
    </>
  );
}
