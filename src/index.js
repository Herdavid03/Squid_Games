import { createRoot} from "react-dom/client";
import Experience from "./Experience";
import "./styles.css";
import { Canvas } from "@react-three/fiber";


const root = createRoot(document.getElementById('root'));

root.render(
   <Canvas
      camera={{position: [6,4,5]}}
   >
      <Experience/>
   </Canvas>
      
);

// root.render(
//    <Experience
//       title={"Squid Games"} 
//       subtitle={"3D web"}
//    />
// );