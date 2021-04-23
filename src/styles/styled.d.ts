import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      
      tableColor: string;
      background: string;
      text: string;
    },
  }
}