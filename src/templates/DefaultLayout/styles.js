import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
    }
    @font-face {
      font-family: 'Consolas';
      src: local('Consolas'), url(./fonts/consolas.woff2) format('woff2');
    }
    body {
      background-color:  ${({ theme: { colors } }) => colors.background};
      color: ${({ theme: { colors } }) => colors.textColor};
    }
`;

export const Container = styled.div``;
