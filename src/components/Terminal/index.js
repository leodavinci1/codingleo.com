/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect';
import { Rnd } from 'react-rnd';
import profilePic from '../../assets/images/profile.jpg';
import docFile from '../../assets/documents/cv.pdf';
import docFileImage from '../../assets/images/download.png';
import githubImage from '../../assets/images/github.png';
import { Close } from '../../assets/icons';

import { Creators as nodeCreators } from '../../store/ducks/node';

import * as S from './styles';

const Terminal = () => {
  const { locale } = useSelector((state) => state.locale);
  const { line } = useSelector((state) => state.node);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [showDownloadContainer, setShowDownloadContainer] = useState(false);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(400);
  const [x, setX] = useState(window.innerWidth / 2);
  const [y, setY] = useState(window.innerHeight / 2);

  const dispatch = useDispatch();

  const onNextStep = () => {
    setShowNextButton(false);
    setShowPreviousButton(false);
    setShowProfilePic(false);
    dispatch(nodeCreators.setLine(line + 1));
  };

  const onPreviousStep = () => {
    setShowNextButton(false);
    setShowPreviousButton(false);
    setShowProfilePic(false);
    dispatch(nodeCreators.setLine(line - 1));
  };

  const calculateAge = () => {
    const myBirthDate = '1997-02-18';
    const today = new Date();
    const birthDate = new Date(myBirthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

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

  const onClose = () => {
    dispatch(nodeCreators.setLine(null));
  };
  const pointerIn = (evt) => {
    dispatch(nodeCreators.setCursorText('DRAG ME'));
    document.body.style.cursor = 'none';
  };
  const pointerOut = (evt) => {
    dispatch(nodeCreators.setCursorText(''));
    document.body.style.cursor = 'auto';
  };

  if (line === null) return;

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
      <S.Terminal>
        <S.Header onMouseEnter={pointerIn} onMouseLeave={pointerOut}>
          <S.Controls>
            <S.Close onClick={onClose} /> <S.Minimize /> <S.Expand />
          </S.Controls>
          <S.DocumentName>nodejs</S.DocumentName>
        </S.Header>

        <S.Body>
          {line === 0 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString('Hello World!')
                  .pauseFor(100)
                  .typeString('<br>')
                  .typeString('Welcome to my portfolio website.')
                  .pauseFor(100)
                  .typeString('<br>')
                  .typeString('Press the play button to start:')
                  .typeString('<br>')
                  .typeString('<br>')
                  .typeString('<br>')
                  .callFunction(() => {
                    setShowNextButton(true);
                  })
                  .start();
              }}
            />
          )}
          {showProfilePic && <S.ProfilePic src={profilePic} />}

          {line === 1 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    setShowProfilePic(true);
                  })
                  .changeDelay(8)
                  .typeString(
                    `My name is Leonardo Cunha, but you can call me Leo :D `
                  )
                  .pauseFor(100)
                  .typeString('<br>')
                  .typeString(
                    `I'm a ${calculateAge()} years old software engineer from Brazil`
                  )
                  .pauseFor(100)
                  .typeString('<br>')
                  .typeString('<br>')
                  .typeString('PS: This is me and my dog Agatha.')
                  .callFunction(() => {
                    setShowNextButton(true);
                    setShowPreviousButton(true);
                  })
                  .start();
              }}
            />
          )}

          {line === 2 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(`.`)
                  .pauseFor(100)
                  .typeString('.')

                  .pauseFor(100)
                  .typeString(`.`)
                  .typeString('<br>')
                  .typeString('<br>')
                  .typeString('<br>')
                  .callFunction(() => {
                    dispatch(nodeCreators.setLine(line + 1));
                  })
                  .start();
              }}
            />
          )}
          {line === 3 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(`.`)
                  .pauseFor(100)
                  .typeString('.')
                  .pauseFor(100)
                  .typeString(`.`)
                  .pauseFor(100)
                  .callFunction(() => {
                    dispatch(nodeCreators.setLine(15));
                  })
                  .start();
              }}
            />
          )}
          {line === 15 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(`.`)
                  .pauseFor(100)
                  .typeString('.')
                  .pauseFor(100)
                  .typeString(`.`)
                  .pauseFor(100)
                  .callFunction(() => {
                    dispatch(nodeCreators.setLine(6));
                  })
                  .start();
              }}
            />
          )}

          {line === 6 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(
                    `I love sports! <br> Growing up I used to play basketball and soccer`
                  )
                  .pauseFor(500)
                  .deleteChars(6)
                  .pauseFor(100)
                  .typeString(`football.`)
                  .typeString('<br>')
                  .typeString('<br>')
                  .pauseFor(100)
                  .typeString(
                    `I also love video games, every kind really...<br><br>`
                  )
                  .pauseFor(100)
                  .typeString(
                    `Coding is not only my job but also a lot of times my hobby, I often research what's the new shiny tech and try implementing it, like the projects you can see in the board behind this computer.`
                  )
                  .callFunction(() => {
                    setShowNextButton(true);
                    setShowPreviousButton(true);
                  })
                  .start();
              }}
            />
          )}
          {line === 7 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(`.`)
                  .pauseFor(100)
                  .typeString('.')

                  .pauseFor(100)
                  .typeString(`.`)
                  .typeString('<br>')
                  .typeString('<br>')
                  .typeString('<br>')
                  .callFunction(() => {
                    dispatch(nodeCreators.setLine(line + 1));
                  })
                  .start();
              }}
            />
          )}

          {line === 8 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(
                    `I have more than 5 years experience with frontend technologies.`
                  )
                  .pauseFor(100)
                  .typeString('<br>Here are some of my main ones:')

                  .pauseFor(100)
                  .typeString('<br>- Javascript')
                  .typeString(`<br>- Reactjs`)
                  .typeString('<br>- Redux-Saga')
                  .typeString('<br>- Nextjs')
                  .typeString('<br>- Liquid')
                  .typeString('<br>- SCSS/CSS/LESS for styling')
                  .typeString('<br>- HTML')
                  .typeString('<br>- jQuery')
                  .callFunction(() => {
                    setShowNextButton(true);
                    setShowPreviousButton(true);
                  })
                  .start();
              }}
            />
          )}
          {line === 9 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(
                    `I have more than 4 years experience with backend technologies.`
                  )
                  .pauseFor(100)
                  .typeString('<br>Here are some of my main ones:')

                  .pauseFor(100)
                  .typeString('<br>- TypeScript')
                  .typeString('<br>- Nodejs')
                  .typeString(`<br>- Express`)
                  .typeString('<br>- MongoDB')
                  .typeString('<br>- MySQL')
                  .typeString('<br>- OracleDB')
                  .callFunction(() => {
                    setShowNextButton(true);
                    setShowPreviousButton(true);
                  })
                  .start();
              }}
            />
          )}
          {line === 10 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(`Now lets talk about my past projects.`)
                  .pauseFor(100)
                  .typeString('<br>Here are my main accomplishments:')

                  .pauseFor(100)
                  .typeString(
                    '<br><br>- Developed many e-commerce stores within <br>Oracle Cloud Commerce and Shopify environment.'
                  )
                  .typeString(
                    '<br><br>- Developed a web application dashboard that contains <br>the daily operation data for wood extraction companies<br> in Brazil  like stock, tree identity, chainsaw operator data, sales data and more.'
                  )
                  .typeString(
                    `<br><br>- Developed a React Native app that uses offline tools<br>like GPS to show the user nearby trees that are<br> ready to be taken down, according rules from local regulation.`
                  )
                  .typeString(
                    `<br><br> Unfortunately due to complience issues I can't show you the source code for those.`
                  )
                  .callFunction(() => {
                    setShowNextButton(true);
                    setShowPreviousButton(true);
                  })
                  .start();
              }}
            />
          )}
          {line === 11 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(`.`)
                  .pauseFor(100)
                  .typeString('.')

                  .pauseFor(100)
                  .typeString(`.`)
                  .typeString('<br>')
                  .typeString('<br>')
                  .typeString('<br>')
                  .callFunction(() => {
                    dispatch(nodeCreators.setLine(line + 1));
                  })
                  .start();
              }}
            />
          )}
          {line === 12 && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(8)
                  .typeString(
                    `You can download my CV and<br> check you this project on GitHub!`
                  )
                  .pauseFor(100)

                  .typeString(
                    `<br>It was made with Reactjs, Styled Components and Redux. <br> Theres more info on the ReadME file inside the repo.`
                  )
                  .typeString(
                    '<br><br>Thank you for your precious time, see ya!'
                  )

                  .pauseFor(100)
                  .typeString(``)
                  .typeString('<br>')
                  .typeString('<br>')
                  .typeString('<br>')
                  .callFunction(() => {
                    setShowDownloadContainer(true);
                  })
                  .start();
              }}
            />
          )}
          <S.ButtonsContainer>
            {showPreviousButton && line > 0 && (
              <S.PlayButton onClick={onPreviousStep}>BACK</S.PlayButton>
            )}
            {showNextButton && (
              <S.PlayButton onClick={onNextStep}>
                {line === 0 ? 'PLAY' : 'NEXT'}
              </S.PlayButton>
            )}
          </S.ButtonsContainer>
          {showDownloadContainer && (
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
          )}
        </S.Body>
      </S.Terminal>
    </Rnd>
  );
};

export default Terminal;
