/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React, {
  useRef,
  useLayoutEffect,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import gsap from 'gsap';
import { a, useSpring } from '@react-spring/three';
import { useThree, useFrame } from '@react-three/fiber';
import { useDrag } from 'react-use-gesture';
import * as THREE from 'three';
import { useDispatch } from 'react-redux';
import { SmallAirplane } from './SmallAirplane';

import { Creators as nodeCreators } from '../../../store/ducks/node';

export function Earth(props) {
  const { nodes, materials } = useGLTF('./models/Earth-transformed.glb');
  const earthRef = useRef();
  const planeRef = useRef();
  const scroll = useScroll();
  const dispatch = useDispatch();
  const tl = useRef();

  const pointerIn = () => {
    dispatch(nodeCreators.setCursorText('GRAB ME'));
    document.body.style.cursor = 'grab';
  };
  const pointerOut = () => {
    dispatch(nodeCreators.setCursorText(''));
    document.body.style.cursor = 'auto';
  };

  useFrame(({ clock }) => {
    earthRef.current.rotation.y += 0.002;
    earthRef.current.rotation.x += 0.001;
    planeRef.current.position.x = Math.sin(clock.getElapsedTime() * 1.3) * 18;
    planeRef.current.position.z = Math.cos(clock.getElapsedTime() * 1.3) * 18;
    planeRef.current.rotation.y += 0.0217;

    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    earthRef.current.position.set(0, 1.5, 0);
    planeRef.current.position.set(0, 0, 0);
    planeRef.current.rotation.set(0, -8, -8);

    tl.current = gsap.timeline({
      defaults: { duration: 3, ease: 'power1.inOut' },
    });

    // tl.current.to(earthRef.current.position, { y: 1.5 }, 0.5);
    tl.current
      .to(earthRef.current.position, { y: 9 }, 0.25)
      .to(earthRef.current.position, { y: 9 }, 20);
  }, []);

  function Inspector({ responsiveness = 20, children }) {
    const { size } = useThree();
    const euler = useMemo(() => new THREE.Euler(), []);
    const [spring, set] = useSpring(() => ({
      rotation: [0, 0, 0],
    }));
    const bind = useDrag(({ delta: [dx, dy] }) => {
      euler.y += (dx / size.width) * responsiveness;
      euler.x += (dy / size.width) * responsiveness;
      euler.x = THREE.MathUtils.clamp(euler.x, -Math.PI / 2, Math.PI / 2);
      set({ rotation: euler.toArray().slice(0, 3) });
    });
    return (
      <a.group {...bind()} {...spring} ref={earthRef} {...props}>
        {children}
      </a.group>
    );
  }

  function FlyingThing() {
    return <SmallAirplane refPlane={planeRef} />;
  }

  function EarthBall() {
    return (
      <mesh
        scale={0.5}
        position={[0, -12, 0]}
        geometry={nodes.Earth.geometry}
        material={materials.Mat}
        onPointerOver={() => pointerIn()}
        onPointerOut={() => pointerOut()}
      />
    );
  }

  return (
    <Inspector>
      <EarthBall />
      <FlyingThing />
    </Inspector>
  );
}

useGLTF.preload('./models/Earth-transformed.glb');
