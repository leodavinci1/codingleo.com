/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Html } from '@react-three/drei';
import { ThemeProvider } from 'styled-components';
import docFile from '../../assets/documents/cv.pdf';
import docFileImage from '../../assets/images/download.png';
import githubImage from '../../assets/images/github.png';

import * as S from './styles';
import { Room } from '../../components/models/room/Room';
import { Earth } from '../../components/models/interests/Earth';
import Circle from '../../components/Circle/Circle';

import Editor from '../../components/Editor';
import Terminal from '../../components/Terminal';

import getGridClass from '../../hooks/getGridClass';
import { COLORS } from '../../constants/colors';

const Home = () => {
  // const { locale } = useSelector((state) => state.locale);

  const { size } = getGridClass();
  const theme = { colors: { ...COLORS }, size };
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = docFile;

    link.download = 'LeonardoCunhaCV';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const openGitHub = () => {
    const githubUrl = 'https://github.com/leodavinci1/codingleo.com';
    window.open(githubUrl, '_blank');
  };

  return (
    <>
      <Terminal />
      <Editor />
      <S.Home>
        <Circle />

        {/* <Editor /> */}

        <Canvas>
          <ambientLight intensity={2} />
          <ScrollControls pages={5} damping={0.2}>
            {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
            <Earth scale={0.1} />
            <Scroll html style={{ width: '100vw', height: '100vh' }}>
              <S.Hello>
                <S.HelloContainer>
                  <S.Title>Hello world!</S.Title>
                  <S.Description>
                    I'm Leo, welcome to my portfolio website.
                  </S.Description>
                </S.HelloContainer>
                <S.HelloContainer>
                  <S.SmallText>( scroll down to continue )</S.SmallText>
                  <S.SmallText> or </S.SmallText>

                  <S.ButtonsContainer>
                    <S.Check onClick={downloadFile}>
                      <S.Image src={docFileImage} />
                      <S.Label>Download CV</S.Label>
                    </S.Check>
                    <S.Check onClick={openGitHub}>
                      <S.Image src={githubImage} />
                      <S.Label>Check out this repo!</S.Label>
                    </S.Check>
                  </S.ButtonsContainer>
                </S.HelloContainer>
              </S.Hello>
            </Scroll>

            <Room scale={0.8} />
          </ScrollControls>
        </Canvas>
      </S.Home>
    </>
  );
};

export default Home;
