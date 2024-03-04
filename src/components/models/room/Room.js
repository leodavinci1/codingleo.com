/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

import React, { useRef, useLayoutEffect } from 'react';
import {
  useGLTF,
  useScroll,
  Text,
  OrbitControls,
  Html,
} from '@react-three/drei';
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { useFrame } from '@react-three/fiber';
import { Wallnotes } from './Wallnotes';
import { Computer } from './Computer';
import { Creators as nodeCreators } from '../../../store/ducks/node';

import getGridClass from '../../../hooks/getGridClass';
import { COLORS } from '../../../constants/colors';

export function Room(props) {
  const { nodes, materials } = useGLTF('./models/isometric-room-new.glb');
  const { line, isVSCodeOpened } = useSelector((state) => state.node);
  const roomRef = useRef();
  const scroll = useScroll();
  const dispatch = useDispatch();
  const tl = useRef();
  const { size } = getGridClass();
  const theme = { colors: { ...COLORS }, size };

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());

    console.log('scroll offset: ', scroll.offset);
    if (scroll.offset < 0.93 && (line !== null || isVSCodeOpened)) {
      dispatch(nodeCreators.setLine(null));
      dispatch(nodeCreators.setCodeOpened(false));
    }
  });

  useLayoutEffect(() => {
    roomRef.current.position.set(0, -8, 0);
    // roomRef.current.position.set(0, 0, 0);

    tl.current = gsap.timeline({
      defaults: { duration: 3, ease: 'power1.inOut' },
    });

    tl.current
      .to(roomRef.current.position, { y: -0.68 }, 0.5)

      .to(roomRef.current.rotation, { y: -1.5 }, 5)
      .to(roomRef.current.position, { x: 0 }, 5)
      .to(roomRef.current.position, { z: 6.1 }, 5)

      .to(roomRef.current.position, { x: -0.9, y: -0.5, z: 3 }, 9)
      .to(roomRef.current.scale, { x: 0.8, y: 0.8, z: 0.8 }, 9)
      .to(roomRef.current.rotation, { y: 0 }, 9)

      .to(roomRef.current.scale, { x: 1, y: 1, z: 1 }, 12)
      .to(roomRef.current.position, { y: -0.8, z: 5.4 }, 12)

      // .to(roomRef.current.position, { z: 3.4 }, 15)

      .to(roomRef.current.position, { y: -0.32, z: 5.4 }, 15);
  }, []);

  return (
    <group {...props} dispose={null} ref={roomRef}>
      <Computer scale={0.0014} position={[0.9, 0.09, -0.75]} />

      <Wallnotes
        scale={1.2}
        rotation={[0, 0, 0]}
        position={[0.9, 0.5, -1.22]}
      />
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 1.1, 0.12]}
      >
        My tech stack
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 1.0, 0.145]}
      >
        Front End:
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.93, 0.13]}
      >
        - Javascript
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.88, 0.14]}
      >
        - ReactJS
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.83, 0.145]}
      >
        - NextJS
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.78, 0.115]}
      >
        - SCSS/CSS
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.73, 0.15]}
      >
        - HTML
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.68, 0.05]}
      >
        - ThreeJS (for fun!)
      </Text>

      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 1.0, -0.23]}
      >
        Back End:
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.93, -0.265]}
      >
        - TypeScript
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.88, -0.235]}
      >
        - NodeJS
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.83, -0.305]}
      >
        - Express/NestJS
      </Text>
      <Text
        font='./shadow.ttf'
        color='#000000'
        scale={0.04}
        rotation={[0, 1.6, 0]}
        position={[-1.9, 0.78, -0.315]}
      >
        - MongoDB/MySQL
      </Text>

      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat21} />
      <mesh
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat22}
      />
      <mesh
        geometry={nodes['Node-Mesh_2'].geometry}
        material={materials.mat16}
      />
      <mesh
        geometry={nodes['Node-Mesh_3'].geometry}
        material={materials.mat18}
      />
      <mesh
        geometry={nodes['Node-Mesh_4'].geometry}
        material={materials.mat15}
      />
      <mesh
        geometry={nodes['Node-Mesh_5'].geometry}
        material={materials.mat17}
      />
      <mesh
        geometry={nodes['Node-Mesh_6'].geometry}
        material={materials.mat19}
      />
      <mesh
        geometry={nodes['Node-Mesh_7'].geometry}
        material={materials.mat20}
      />
      <mesh
        geometry={nodes['Node-Mesh_8'].geometry}
        material={materials.mat3}
      />
      <mesh
        geometry={nodes['Node-Mesh_9'].geometry}
        material={materials.mat23}
      />
      <mesh
        geometry={nodes['Node-Mesh_10'].geometry}
        material={materials.mat24}
      />
      <mesh
        geometry={nodes['Node-Mesh_11'].geometry}
        material={materials.mat8}
      />
      <mesh
        geometry={nodes['Node-Mesh_12'].geometry}
        material={materials.mat14}
      />
    </group>
  );
}

useGLTF.preload('./models/isometric-room-new.glb');
