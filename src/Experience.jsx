import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
    const boxRef = useRef(null);
    console.log(boxRef.current);

  useFrame((state, delta) => {
   boxRef.current.rotation.x += 1 * delta;


    });

    return (
        <>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />   
        <OrbitControls makeDefault/>
        <mesh ref={boxRef}>
            <boxGeometry args={[10, 1, 10]} />
            <meshStandardMaterial color="yellow" />
        </mesh>
        </>
    )
}
export default Experience;

// const Experience = ({title,subtitle}) => {
//     return (
//             <h1 className= "title"> {title } </h1>
//             <span> {subtitle} </span>
//         </>
//     )
// }
// export default Experience;