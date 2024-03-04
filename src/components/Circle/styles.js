import styled from 'styled-components';

export const Circle = styled.div`
  position: fixed;
  height: ${({ big }) => (big ? '80px' : '40px')};
  width: ${({ big }) => (big ? '80px' : '40px')};
  border: 1px solid white;
  border-radius: 100%;

  top: ${({ big }) => (big ? '-40px' : '-20px')};
  left: ${({ big }) => (big ? '-40px' : '-20px')};
  pointer-events: none;
  z-index: 10001;
  display: flex;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  font-family: Menlo;

  transition: width 0.3s ease, height 0.3s ease;
`;
