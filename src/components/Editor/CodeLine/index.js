/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const CodeLine = ({ count, ident, active, content }) => {
  const msValue = Math.floor(Math.random() * 1300);
  return (
    <S.Line active={active} className={active ? 'active' : ''} delay={msValue}>
      <S.Left>
        <S.Count active={active}>{count}</S.Count>
        <S.Content ident={ident}>{content}</S.Content>{' '}
      </S.Left>
      <S.Right>
        {active && (
          <S.MsCount active={active}>{`${
            msValue > 999 ? `${(msValue / 1000).toFixed(1)}s` : `${msValue}ms`
          }`}</S.MsCount>
        )}
      </S.Right>
    </S.Line>
  );
};

CodeLine.propTypes = {
  count: PropTypes.number.isRequired,
  ident: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  content: PropTypes.any,
};

export default CodeLine;
