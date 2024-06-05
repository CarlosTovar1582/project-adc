import React ,{ useState,Suspense } from 'react'

import '../../src/App.css'
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from '@react-three/drei';
import LogoElectric from '../../public/LogoElectric'
import Cubo from '../../public/Cubo'

export default function Logo() {
  return (
    <div   className="medidasCanvas border-2 border-blue-800" >
      <Canvas>    
          <ambientLight/>
          <pointLight position={[100,100,0]} intensity={0.4}/>
          <pointLight position={[-35,35,0]} intensity={0.4}/>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <Suspense fallback={null}>
            <Cubo/>          
          </Suspense>
          <Environment preset='sunset'/>
      </Canvas> 
    </div>
    
  )
}
