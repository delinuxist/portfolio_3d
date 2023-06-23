'use client'
import { Decal, Float, OrbitControls, PerspectiveCamera, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { CanvasLoader } from '../loaders'
import { StaticImageData } from 'next/image'


const Ball = (Props: { imgUrl: string }) => {
  const [decal] = useTexture([Props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  )
}

const BallCanvas = (Props: { icon: StaticImageData }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        />
        <Ball imgUrl={Props.icon.src} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;