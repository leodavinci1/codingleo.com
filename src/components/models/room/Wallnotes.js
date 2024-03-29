/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Wallnotes.glb 
*/

import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { Text, useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three'; // Import animated from react-spring/three
import { Creators as nodeCreators } from '../../../store/ducks/node';

export function Wallnotes(props) {
  const dispatch = useDispatch();
  const { nodes, materials } = useGLTF('./models/Wallnotes.glb');
  const note1 = useRef();
  const pin1 = useRef();
  const note2 = useRef();
  const pin2 = useRef();
  const note3 = useRef();
  const pin3 = useRef();
  const note4 = useRef();
  const pin4 = useRef();
  const note5 = useRef();
  const pin5 = useRef();
  const note6 = useRef();
  const pin6 = useRef();

  const [hovered1, setHovered1] = React.useState(false); // State to track hover
  const [hovered2, setHovered2] = React.useState(false);
  const [hovered3, setHovered3] = React.useState(false);
  const [hovered4, setHovered4] = React.useState(false);
  const [hovered5, setHovered5] = React.useState(false);
  const [hovered6, setHovered6] = React.useState(false);

  const springProps1 = useSpring({
    scale: hovered1 ? 120 : 100,
    position: hovered1 ? [0.12, -0.07, 0.1] : [0, 0, 0],
    rotation: hovered1 ? [0, -0.02, 0.15] : [0, 0, 0],
  });

  const springProps2 = useSpring({
    scale: hovered2 ? 120 : 100,
    position: hovered2 ? [0.12, -0.07, 0.1] : [0, 0, 0],
    rotation: hovered2 ? [0, -0.02, 0.15] : [0, 0, 0],
  });

  const springProps4 = useSpring({
    scale: hovered4 ? 120 : 100,
    position: hovered4 ? [0.12, -0.02, 0.1] : [0, 0, 0],
    rotation: hovered4 ? [0, -0.02, 0.15] : [0, 0, 0],
  });
  const springProps5 = useSpring({
    scale: hovered5 ? 120 : 100,
    position: hovered5 ? [0.02, -0.03, 0.1] : [0, 0, 0],
    rotation: hovered5 ? [0, -0.02, 0.15] : [0, 0, 0],
  });
  const springProps6 = useSpring({
    scale: hovered6 ? 120 : 100,
    position: hovered6 ? [0.12, -0.07, 0.1] : [0, 0, 0],
    rotation: hovered6 ? [0, -0.02, 0.15] : [0, 0, 0],
  });

  const getNoteRef = (note) => {
    switch (note) {
      case 'note-1':
        return { note: note1, pin: pin1, setHovered: setHovered1 };

      case 'note-2':
        return { note: note2, pin: pin2, setHovered: setHovered2 };

      case 'note-3':
        return { note: note3, pin: pin3, setHovered: setHovered3 };

      case 'note-4':
        return { note: note4, pin: pin4, setHovered: setHovered4 };

      case 'note-5':
        return { note: note5, pin: pin5, setHovered: setHovered5 };

      case 'note-6':
        return { note: note6, pin: pin6, setHovered: setHovered6 };

      default:
        return null;
    }
  };

  const pointerIn = (evt) => {
    if (evt.object.name === 'note-2' || evt.object.name === 'note-4') {
      dispatch(nodeCreators.setCursorText('SOON'));
    } else {
      dispatch(nodeCreators.setCursorText('OPEN'));
    }

    document.body.style.cursor = 'none';
    console.log(evt.object.name);
    const data = getNoteRef(evt.object.name);
    if (data && data.setHovered) {
      data.setHovered(true);
    }
  };
  const pointerOut = (evt) => {
    dispatch(nodeCreators.setCursorText(''));
    document.body.style.cursor = 'auto';
    const data = getNoteRef(evt.object.name);
    if (data && data.setHovered) {
      data.setHovered(false);
    }
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Board.geometry}
        material={materials['Material.001']}
        scale={100}
      >
        <Text
          font='./shadow.ttf'
          color='#000000'
          scale={0.0004}
          rotation={[0, 0, 0]}
          position={[0, 0.0045, 0.00031]}
        >
          My demo projects
        </Text>
      </mesh>

      <mesh
        name='pin-1'
        ref={pin1}
        geometry={nodes['Pin-1'].geometry}
        material={materials['Material.001']}
        scale={100}
      />
      <animated.mesh
        onPointerOver={pointerIn}
        onPointerOut={pointerOut}
        scale={springProps1.scale} // Use animated scale
        position={springProps1.position}
        rotation={springProps1.rotation}
        name='note-1'
        ref={note1}
        geometry={nodes['Sticky-1'].geometry}
        material={materials['Material.001']}
        onClick={() =>
          window.open('https://brello.codingleo.com', '_blank').focus()
        }
        // scale={100}
      >
        <Text
          font='./shadow.ttf'
          color='#000000'
          scale={0.0003}
          rotation={[0, 0, -0.2]}
          position={[-0.00235, 0.0038, 0.00031]}
        >
          Brello
        </Text>
      </animated.mesh>
      <mesh
        name='pin-2'
        ref={pin2}
        geometry={nodes['Pin-2'].geometry}
        material={materials['Material.001']}
        scale={100}
      />
      {/* <mesh
        name='pin-3'
        ref={pin3}
        geometry={nodes['Pin-3'].geometry}
        material={materials['Material.001']}
        scale={100}
      /> */}
      <mesh
        name='pin-4'
        ref={pin4}
        geometry={nodes['Pin-4'].geometry}
        material={materials['Material.001']}
        scale={100}
      />
      <mesh
        name='pin-5'
        ref={pin5}
        geometry={nodes['Pin-5'].geometry}
        material={materials['Material.001']}
        scale={100}
      />
      <mesh
        name='pin-6'
        ref={pin6}
        geometry={nodes['Pin-6'].geometry}
        material={materials['Material.001']}
        scale={100}
      />

      <animated.mesh
        onPointerOver={pointerIn}
        onPointerOut={pointerOut}
        name='note-2'
        ref={note2}
        geometry={nodes['Sticky-2'].geometry}
        material={materials['Material.001']}
        scale={springProps2.scale} // Use animated scale
        position={springProps2.position}
        rotation={springProps2.rotation}
      >
        <Text
          font='./shadow.ttf'
          color='#000000'
          scale={0.0002}
          rotation={[0, 0, 0.1]}
          position={[-0.00077, 0.0033, 0.00031]}
        >
          Rarebnb
        </Text>
      </animated.mesh>
      {/* <mesh
        onPointerOver={pointerIn}
        onPointerOut={pointerOut}
        ref={note3}
        name='note-3'
        geometry={nodes['Sticky-3'].geometry}
        material={materials['Material.001']}
        scale={100}
      /> */}
      <animated.mesh
        onPointerOver={pointerIn}
        onPointerOut={pointerOut}
        ref={note4}
        name='note-4'
        geometry={nodes['Sticky-4'].geometry}
        material={materials['Material.001']}
        scale={springProps4.scale} // Use animated scale
        position={springProps4.position}
        rotation={springProps4.rotation}
      >
        <Text
          font='./shadow.ttf'
          color='#000000'
          scale={0.00015}
          rotation={[0, 0, 0.1]}
          position={[-0.00182, 0.0019, 0.00031]}
        >
          LIVE NEWS
        </Text>
      </animated.mesh>
      <animated.mesh
        onPointerOver={pointerIn}
        onPointerOut={pointerOut}
        ref={note5}
        name='note-5'
        geometry={nodes['Sticky-5'].geometry}
        material={materials['Material.001']}
        scale={springProps5.scale} // Use animated scale
        position={springProps5.position}
        rotation={springProps5.rotation}
        onClick={() =>
          window
            .open('https://github.com/leodavinci1/cool-dash', '_blank')
            .focus()
        }
      >
        <Text
          font='./shadow.ttf'
          color='#000000'
          scale={0.00018}
          rotation={[0, 0, 0.1]}
          position={[0.0006, 0.0016, 0.00031]}
        >
          Dashboard
        </Text>
      </animated.mesh>
      {/* <mesh
        onPointerOver={pointerIn}
        onPointerOut={pointerOut}
        ref={note6}
        name='note-6'
        geometry={nodes['Sticky-6'].geometry}
        material={materials['Material.001']}
        scale={100}
      /> */}
    </group>
  );
}

useGLTF.preload('./models/Wallnotes.glb');
