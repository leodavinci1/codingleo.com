import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';

function Circle() {
  const { cursorText } = useSelector((state) => state.node);

  const setUpCircle = () => {
    const circleElement = document.querySelector('.circle');
    const mouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    const previousCircle = { x: 0, y: 0 };
    let currentScale = 0;

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    const speed = 0.17;

    const tick = () => {
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;

      const deltaCircleX = circle.x - previousCircle.x;
      const deltaCircleY = circle.y - previousCircle.y;
      previousCircle.x = circle.x;
      previousCircle.y = circle.y;

      const velocity = Math.min(
        Math.sqrt(deltaCircleX ** 2 + deltaCircleY ** 2) * 4,
        150
      );

      // angle
      const angle = Math.atan2(deltaCircleY, deltaCircleX);

      const rotateTransform = `rotate(${angle}rad)`;

      const scale = (velocity / 150) * 0.8;

      currentScale += (scale - currentScale) * speed;

      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      const scaleTransform = `scale(${1 + currentScale},${1 - currentScale})`;

      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      window.requestAnimationFrame(tick);
    };

    tick();
  };

  useLayoutEffect(() => {
    setUpCircle();
  }, []);

  return (
    <S.Circle big={!!cursorText} className='circle'>
      {cursorText}
    </S.Circle>
  );
}

export default Circle;
