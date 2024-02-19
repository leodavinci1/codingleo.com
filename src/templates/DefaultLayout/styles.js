import styled, { createGlobalStyle } from 'styled-components';
// import ConsolasWoff2 from '../../assets/fonts/consolas.woff2';
// import MenloWoff2 from '../../assets/fonts/menlo.woff2';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
    }
   
    body {
      background-color:  ${({ theme: { colors } }) => colors.background};
      color: ${({ theme: { colors } }) => colors.textColor};
    }
`;

export const Container = styled.div``;
