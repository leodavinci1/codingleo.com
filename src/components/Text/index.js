/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';

import * as S from './styles';

// Text component
const Text = ({ color }) => <S.Text color={COLORS[color]} />;

Text.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Text;
