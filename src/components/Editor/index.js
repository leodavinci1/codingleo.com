/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Rnd } from 'react-rnd';
import { COLORS } from '../../constants/colors';
import jsIcon from '../../assets/images/js.png';
import { Close } from '../../assets/icons';
import CodeLine from './CodeLine';

import { Creators as nodeCreators } from '../../store/ducks/node';

import * as S from './styles';

const {
  text: { purple, red, green, blue },
} = COLORS;

const Editor = () => {
  const { locale } = useSelector((state) => state.locale);
  const { isVSCodeOpened, line } = useSelector((state) => state.node);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const [x, setX] = useState(window.innerWidth / 2 - 600);
  const [y, setY] = useState(window.innerHeight / 2 - 200);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(nodeCreators.setCodeOpened(false));
  };

  const pointerIn = (evt) => {
    dispatch(nodeCreators.setCursorText('DRAG ME'));
    document.body.style.cursor = 'none';
  };
  const pointerOut = (evt) => {
    dispatch(nodeCreators.setCursorText(''));
    document.body.style.cursor = 'auto';
  };

  if (!isVSCodeOpened) return null;

  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      onDragStop={(e, d) => {
        setX(d.x);
        setY(d.y);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWidth(ref.style.width);
        setHeight(ref.style.height);
        setX(position.x);
        setY(position.y);
      }}
    >
      <S.Editor>
        <S.Header onMouseEnter={pointerIn} onMouseLeave={pointerOut}>
          <S.Controls>
            <S.Close onClick={onClose} /> <S.Minimize /> <S.Expand />
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
            active={line === 1}
            content={
              <>
                <S.C color={purple}>import </S.C>
                <S.C color={red}> Leo </S.C>
                <S.C color={purple}> from </S.C>
                <S.C color={green}> "leojs"</S.C>;
              </>
            }
          />
          <CodeLine
            ident={0}
            count={2}
            active={line === 2}
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
            active={line === 3}
            content={
              <>
                <S.C color={purple}>import</S.C>
                <S.C color={red}> translateCurriculum </S.C>
                <S.C color={purple}> from </S.C>
                <S.C color={green}> "../utils/localization"</S.C>;
              </>
            }
          />
          <CodeLine ident={0} count={4} active={line === 4} content='' />
          <CodeLine
            ident={0}
            count={5}
            active={line === 5}
            content={
              <>
                <S.C color={purple}>function </S.C>
                <S.C color={blue}>leonardoCunhaCV</S.C>(
                <S.C color={red}> interests </S.C>= 😄 ){' {'}
              </>
            }
          />
          <CodeLine
            ident={1}
            count={6}
            active={line === 6}
            content={
              <>
                <S.C color={purple}>const</S.C>
                {' {🏀, 🎮, 💻} = '}
                <S.C color={red}> interests</S.C>;
              </>
            }
          />
          <CodeLine
            ident={1}
            count={7}
            active={line === 7}
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
            active={line === 8}
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
            active={line === 9}
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
            active={line === 10}
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
            active={line === 11}
            content={
              <>
                <S.C color={purple}>const</S.C>
                {' 📦 = '}
                <S.C color={blue}> translateCurriculum</S.C>(
                <S.C color={green}>{`"${locale}"`}</S.C>
                {', { 🦁, 🎨, 🚚, 📄 }'}
                );
              </>
            }
          />

          <CodeLine
            ident={1}
            count={12}
            active={line === 12}
            content={
              <>
                <S.C color={purple}>return</S.C>
                <S.C color={purple}> new </S.C>
                <S.C color={blue}> CurriculumVitae</S.C>(...📦);
              </>
            }
          />
          <CodeLine
            ident={0}
            count={13}
            active={line === 13}
            content={<>{`}`}</>}
          />
          <CodeLine ident={0} count={14} active={line === 14} content={<></>} />
          <CodeLine
            ident={0}
            count={15}
            active={line === 15}
            content={
              <>
                <S.C color={blue}> leonardoCunhaCV</S.C>();
              </>
            }
          />
          <CodeLine ident={0} count={16} active={line === 16} content={<></>} />
        </S.Body>
      </S.Editor>
    </Rnd>
  );
};

export default Editor;
