import styled, { css } from 'styled-components';

const getContainerResponsive = (size) => {
  if (size === 'md' || size === 'lg') {
    return css`
      width: 1200px;
    `;
  }

  return css`
    width: 100%;
  `;
};

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 150px auto;
  ${({ theme: { size } }) => getContainerResponsive(size)}
`;

export const Terminal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Editor = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  width: 800px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 3px 6px 18px 3px rgba(27, 34, 51, 0.83);
  background: ${({
    theme: {
      colors: { editor },
    },
  }) => editor.body};
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
