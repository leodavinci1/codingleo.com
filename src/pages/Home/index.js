/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../constants/colors';
import jsIcon from '../../assets/images/js.png';
import { Close } from '../../assets/icons';
import { Editor, Terminal } from '../../components';
import { Creators as sessionCreators } from '../../store/ducks/locale';

import * as S from './styles';

const {
  text: { purple, red, green, blue },
} = COLORS;

const Home = () => {
  const { locale } = useSelector((state) => state.locale);
  const { line } = useSelector((state) => state.node);

  return (
    <S.View>
      <S.Container>
        <Editor />
        <Terminal />
      </S.Container>
      <S.ContactMe>
        Let's work together! You can contact me at: <b> ofeule@gmail.com</b>
      </S.ContactMe>
    </S.View>
  );
};

export default Home;
