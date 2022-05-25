import styled from 'styled-components';

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Consolas;
  font-weight: 600;
  font-size: 15px;
  padding: 2px 0;
`;

export const Count = styled.div`
  font-family: Consolas;
  font-weight: 600;
  font-size: 15px;
  width: 40px;
  margin-right: 15px;
  margin-left: 15px;
  color: ${({
    theme: {
      colors: {
        editor: { lineNumber },
      },
    },
    active,
  }) => (active ? lineNumber.active : lineNumber.neutral)};
`;

export const Content = styled.div`
  font-family: Consolas;
  font-weight: 600;
  margin-left: ${({ ident }) => ident * 50}px;
  font-size: 15px;
`;
