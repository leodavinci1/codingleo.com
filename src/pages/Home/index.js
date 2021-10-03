/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { COLORS } from '../../constants/colors';
import jsIcon from '../../assets/images/js.png';
import { Close } from '../../assets/icons';
import { CodeLine } from '../../components';
import { Creators as sessionCreators } from '../../store/ducks/session';

import * as S from './styles';

const {
  text: { purple, red, green, yellow },
} = COLORS;

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
              <S.C color={purple}>import</S.C> Leo from "leo";
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
              {`  CurriculumVitae from
          "curriculum-vitae"`}
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
              {` { translateCurriculum }  from "../utils/localization";`}
            </>
          }
        />
        <CodeLine ident={0} count={4} active={false} content='' />
        <CodeLine
          ident={0}
          count={5}
          active={false}
          content={<>{`export default const LeonardoCunhaCV = (😄) => {`}</>}
        />
        <CodeLine
          ident={1}
          count={6}
          active={false}
          content={<>{`const {🏀, 🎮, 💻} = 😄;`}</>}
        />
        <CodeLine
          ident={1}
          count={7}
          active={false}
          content={<>const 🦁 = new Leo(🏀, 🎮, 💻);</>}
        />
        <CodeLine
          ident={1}
          count={8}
          active={false}
          content={<>const 🎨 = 🦁.getFrontendSkills();</>}
        />
        <CodeLine
          ident={1}
          count={9}
          active={false}
          content={<>const 🚚 = 🦁.getBackendSkills();</>}
        />
        <CodeLine
          ident={1}
          count={10}
          active={false}
          content={<>const 📄 = 🦁.getPastProjects();</>}
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
