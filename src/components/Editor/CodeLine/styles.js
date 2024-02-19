import styled from 'styled-components';

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Consolas;
  font-weight: 600;
  font-size: 15px;
  padding: 2px 0;
  background: ${({ active }) => (active ? '#404e73' : 'inherit')};

  /* "to left" / "to right" - affects initial color */
  background: linear-gradient(to left, transparent 50%, #404e73 50%) right;
  background-size: 200%;
  transition: ${({ delay }) => (delay ? `${delay}ms` : '0.5s')} ease-out;
  &.active {
    background-position: left;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Right = styled.div``;

export const MsCount = styled.div`
  font-family: Consolas;
  font-weight: 600;
  font-size: 15px;
  width: 40px;
  margin-right: 15px;
  margin-left: 15px;
  justify-self: flex-end;

  color: ${({
    theme: {
      colors: {
        editor: { lineNumber },
      },
    },
    active,
  }) => (active ? lineNumber.active : lineNumber.neutral)};
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
