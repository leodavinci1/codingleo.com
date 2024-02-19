import styled, { css } from 'styled-components';

const getTerminalResponsive = (size) => {
  if (size === 'md' || size === 'lg') {
    return css`
      width: 500px;
    `;
  }

  return css`
    width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
  `;
};

export const Terminal = styled.div`
  font-family: 'Menlo';
  width: 500px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 3px 6px 18px 3px rgba(27, 34, 51, 0.83);
  background: ${({
    theme: {
      colors: { terminal },
    },
  }) => terminal.body};

  ${({ theme: { size } }) => getTerminalResponsive(size)}
`;
export const ButtonsContainer = styled.div`
  display: flex;
`;

export const Check = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-right: 40px;
`;
export const ProfilePic = styled.img`
  width: 250px;
  height: auto;
  margin-left: 100px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 80px;
  height: auto;
`;

export const Label = styled.div`
  margin-top: 10px;
`;
export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 12px;
  border-radius: 8px 8px 0 0;
  color: ${({
    theme: {
      colors: { terminal },
    },
  }) => terminal.headerColorText};
  background: ${({
    theme: {
      colors: { terminal },
    },
  }) => terminal.header};
`;

export const Controls = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  flex-direction: row;
`;

export const PlayButton = styled.div`
  border: 1px solid white;
  padding: 3px 10px;
  width: fit-content;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 10px;
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

export const Body = styled.div`
  padding: 10px 10px;
  line-height: 17px;
  font-size: 14px;

  color: ${({
    theme: {
      colors: { terminal },
    },
  }) => terminal.bodyColorText};
  border-radius: 0 0 8px 8px;
`;

export const C = styled.span`
  color: ${({ color }) => color};
`;
