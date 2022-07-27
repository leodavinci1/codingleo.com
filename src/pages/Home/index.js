/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { COLORS } from '../../constants/colors';
import jsIcon from '../../assets/images/js.png';
import { Close } from '../../assets/icons';
import { CodeLine } from '../../components';
import { Text } from '../../utils/text';
import { Creators as sessionCreators } from '../../store/ducks/session';

import * as S from './styles';

const {
  text: { purple, red, green, blue, yellow },
} = COLORS;
const textColors = {
  purple,
  red,
  green,
  blue,
  yellow,
};

console.log(textColors);
const locale = 'PT-BR';
const text = new Text(S, textColors);
const t = text.t.bind(this);

const Home = () => (
  <S.Container>
    <S.Editor>
      <S.Header>
        <S.Controls>
          <S.Close /> <S.Minimize /> <S.Expand />
        </S.Controls>
        <S.DocumentName>LeonardoCunhaCV.js</S.DocumentName>
      </S.Header>
      <S.Tab>
        <S.JSIcon src={jsIcon} /> LeonardoCunhaCV.js <Close />
      </S.Tab>
      <S.Body>
        <CodeLine
          ident={0}
          count={1}
          active
          content={
            <>
              {t('purple', 'import')}
              <S.C color={red}> Leo </S.C>
              <S.C color={purple}> from </S.C>
              <S.C color={green}> "leojs"</S.C>;
            </>
          }
        />
        <CodeLine
          ident={0}
          count={2}
          active={false}
          content={
            <>
              <S.C color={purple}>import</S.C>
              <S.C color={red}> CurriculumVitae </S.C>
              <S.C color={purple}> from </S.C>
              <S.C color={green}> "curriculum-vitae"</S.C>;
            </>
          }
        />
        <CodeLine
          ident={0}
          count={3}
          active={false}
          content={
            <>
              <S.C color={purple}>import</S.C>
              <S.C color={red}> translateCurriculum </S.C>
              <S.C color={purple}> from </S.C>
              <S.C color={green}> "../utils/localization"</S.C>;
            </>
          }
        />
        <CodeLine ident={0} count={4} active={false} content='' />
        <CodeLine
          ident={0}
          count={5}
          active={false}
          content={
            <>
              <S.C color={purple}>export</S.C>
              <S.C color={purple}> default </S.C>
              <S.C color={purple}>function </S.C>
              <S.C color={blue}>LeonardoCunhaCV</S.C>(😄){' {'}
            </>
          }
        />
        <CodeLine
          ident={1}
          count={6}
          active={false}
          content={
            <>
              <S.C color={purple}>const</S.C>
              {' {🏀, 🎮, 💻} = 😄'}
            </>
          }
        />
        <CodeLine
          ident={1}
          count={7}
          active={false}
          content={
            <>
              <S.C color={purple}>const</S.C>
              {' 🦁 = '}
              <S.C color={purple}>new</S.C>
              <S.C color={blue}> Leo</S.C>
              (🏀, 🎮, 💻)
            </>
          }
        />
        <CodeLine
          ident={1}
          count={8}
          active={false}
          content={
            <>
              <S.C color={purple}>const</S.C>
              {' 🎨 = 🦁.'}
              <S.C color={blue}> getFrontendSkills</S.C>
              ();
            </>
          }
        />
        <CodeLine
          ident={1}
          count={9}
          active={false}
          content={
            <>
              <S.C color={purple}>const</S.C>
              {' 🚚 = 🦁.'}
              <S.C color={blue}> getBackendSkills</S.C>
              ();
            </>
          }
        />
        <CodeLine
          ident={1}
          count={10}
          active={false}
          content={
            <>
              <S.C color={purple}>const</S.C>
              {' 📄 = 🦁.'}
              <S.C color={blue}> getPastProjects</S.C>
              ();
            </>
          }
        />
        <CodeLine
          ident={1}
          count={11}
          active={false}
          content={
            <>
              <S.C color={purple}>const</S.C>
              <S.C color={blue}> translateCurriculum</S.C>
              <S.C color={green}>{`"${locale}"`}</S.C>
            </>
            // <>{`const 📦 = translateCurriculum("PT-BR", {🦁, 🎨, 🚚, 📄});`}</>
          }
        />
        <CodeLine
          ident={1}
          count={11}
          active={false}
          content={
            <>{`const 📦 = translateCurriculum("PT-BR", {🦁, 🎨, 🚚, 📄});`}</>
          }
        />
        <CodeLine
          ident={1}
          count={12}
          active={false}
          content={<>return new CurriculumVitae(...📦);</>}
        />
        <CodeLine ident={0} count={13} active={false} content={<>{`}`}</>} />
        <CodeLine ident={0} count={14} active={false} content={<></>} />
      </S.Body>
    </S.Editor>
  </S.Container>
);

export default Home;
