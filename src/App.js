import "./index.css";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function App() {
  const cube = useRef();

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  const eventHandler = () => {
    let colorOne = Math.floor(Math.random() * 255);
    let colorTwo = Math.floor(Math.random() * 255);
    let colorThree = Math.floor(Math.random() * 255);

    setColor(`rgb(${colorOne}, ${colorTwo}, ${colorThree})`);

    cube.current.material.color.set("blue");
  };

  const [color, setColor] = useState("mediumPurple");

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Text onClick={eventHandler}>hello</Text>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cube} position-x={2} scale={1.5} onClick={eventHandler}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}

export default App;
