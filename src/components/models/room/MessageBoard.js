/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 MessageBoard.glb --transform 
Files: MessageBoard.glb [13.44KB] > C:\Users\leo\Documents\projects\leo\codingleo.com\public\models\MessageBoard-transformed.glb [3.61KB] (73%)
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function MessageBoard(props) {
  const { nodes, materials } = useGLTF('./models/MessageBoard-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Message_Board.geometry} material={materials.Mat} />
    </group>
  );
}

useGLTF.preload('./models/MessageBoard-transformed.glb');
