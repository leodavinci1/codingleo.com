import styled, { css } from 'styled-components';

const getContainerResponsive = (size) => {
  if (size === 'md' || size === 'lg') {
    return css`
      width: 1200px;
    `;
  }

  return css`
    width: 100%;
    flex-direction: column;
  `;
};

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Circle = styled.div`
  position: fixed;
  height: ${({ big }) => (big ? '80px' : '40px')};
  width: ${({ big }) => (big ? '80px' : '40px')};
  border: 1px solid white;
  border-radius: 100%;

  top: ${({ big }) => (big ? '-40px' : '-20px')};
  left: ${({ big }) => (big ? '-40px' : '-20px')};
  pointer-events: none;
  z-index: 1000;
  display: flex;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  font-family: Menlo;
`;

export const Check = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 80px;
  height: auto;
`;

export const Label = styled.div`
  margin-top: 10px;
`;
export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  margin: 150px 0 auto;
  margin-bottom: 50px;
  ${({ theme: { size } }) => getContainerResponsive(size)}
`;

export const HelloContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallText = styled.div`
  font-family: Consolas;
  font-size: 18px;
  font-weight: 100;
  margin-top: 40px;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 60px;
  text-align: center;
  font-weight: 900;
`;

export const Description = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 30px;
  font-weight: 200;
  font-family: Consolas;
`;
export const HeaderEl = styled.header``;

export const Hello = styled.div`
  font-family: Menlo;
  height: 50vh;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translateX(-50%);
`;
export const Home = styled.div`
  height: 100vh;
  width: 100vw;
`;
export const HeroSection = styled.div`
  height: 50vh;
`;
export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Menlo';
  justify-content: center;
  height: 50vh;
  position: absolute;
  top: 400vh;
  left: 50%;
  transform: translateX(-50%);
`;
export const ContactMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  b {
    margin-left: 10px;
    font-size: 16px;
  }
`;
export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 12px;
`;

export const Controls = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  flex-direction: row;
`;

export const Close = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background: ${({
    theme: {
      colors: { controls },
    },
  }) => controls.close};
`;

export const Minimize = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background: ${({
    theme: {
      colors: { controls },
    },
  }) => controls.minimize};
`;

export const Expand = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({
    theme: {
      colors: { controls },
    },
  }) => controls.expand};
`;

export const DocumentName = styled.div``;

export const JSIcon = styled.img`
  width: 17px;
  margin-right: 8px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  padding: 15px;
  padding-right: 5px;
  background: ${({
    theme: {
      colors: { editor },
    },
  }) => editor.document};
  > svg {
    padding-top: 1px;
    margin-left: 35px;
  }
`;

export const Body = styled.div`
  padding-top: 20px;
  background: ${({
    theme: {
      colors: { editor },
    },
  }) => editor.document};
  border-radius: 0 0 8px 8px;
  height: 100%;
`;

export const C = styled.span`
  color: ${({ color }) => color};
`;
