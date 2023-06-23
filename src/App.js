import './App.css';
import {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, CurveModifier} from '@react-three/drei'

function Sphere(props) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  useFrame((state, delta) => (ref.current.rotation.z += delta))

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <sphereGeometry args={[1, 20, 20]} />
      <meshStandardMaterial color={'blue'} wireframe />
    </mesh>
  )
}

function Octahedron(props) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  useFrame((state, delta) => (ref.current.rotation.z += delta))

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <octahedronGeometry />
      <meshBasicMaterial color={'blue'} wireframe />
    </mesh>
  )
}

function Cone(props) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.z += delta))
  useFrame((state, delta) => (ref.current.rotation.y += delta))

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <coneGeometry args={[0.5,2]} />
      <meshBasicMaterial color={"blue"} wireframe />
    </mesh>
  )
}

function Box(props) {
  const ref = useRef()
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.z += delta))
  useFrame((state, delta) => (ref.current.rotation.y += delta))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
    >
      <boxGeometry args={[2,2,2]} />
      <meshStandardMaterial color={'blue'} wireframe />
    </mesh>
  )
}

function Tube(props) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.z += delta))
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  //const curve = CurveModifier(5)

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <tubeGeometry />
      <meshStandardMaterial color={'blue'} wireframe />
    </mesh>
  )
}

function Torus(props) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.z += delta))
  useFrame((state, delta) => (ref.current.rotation.y += delta))

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <torusGeometry args={[1.5, 0.5, 20, 22]} />
      <meshBasicMaterial color={'blue'} wireframe />
    </mesh>
  )
}

function Plane() {
  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color={'black'} />
    </mesh>
  )
}

function App() {
  return (
    <div id="canvas-container" className="container">
      <Canvas>
          <ambientLight intensity={0.01} />
          <spotLight position={[10,-10,10]} angle={-0.05} penumbra={1} />
          <directionalLight color="white" position={[0,0,5]} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-4,2,-2]} />
          <Cone position={[3,2,-1]} />
          <Sphere position={[-4,-3,-1]} />
          <Octahedron position={[3,-3,-1]} />
          <Tube position={[0, 2, -3]} />
          <Torus position={[0, -3, -2]} />
          <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
