/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const CodeLine = ({ count, ident, active, content }) => (
  <S.Line active={active}>
    <S.Count active={active}>{count}</S.Count>
    <S.Content ident={ident}>{content}</S.Content>
  </S.Line>
);

CodeLine.propTypes = {
  count: PropTypes.number.isRequired,
  ident: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};

export default CodeLine;
