import "../style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "../Experience.jsx";
import DynamicModal from "./Modal"
import SettingsModal from "./Settings"
import { Leva } from "leva";
import StarSky from "react-star-sky";
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';



export default function Interactive() {
    return (
        <>
            <Button
                className="settings-icon"
                component={Link}
                to="/interactive?showSettingsModal=true">
                <SettingsIcon
                    className="settings-icon"
                    fontSize="large" />
            </Button>
            <StarSky
                isPageBackground={true}
                className={""} // applied to the div wrapper
                starColor={"rainbow"} // Default = 'white', options: 'rainbow', 'white/red/green/etc'[w3color], [r, g, b]
                skyColor={[20, 20, 100]} // Default = 'black', options: 'white/red/green/etc'[w3color], [r, g, b]
            />
            <img className="controlKeys" src="./keyControls.png" alt="control keys" />
            <DynamicModal />
            <SettingsModal />
            <Leva hidden />
            <Canvas
                shadows
                camera={{
                    fov: 65,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 0],
                }}
                onPointerDown={(e) => {
                    e.target.requestPointerLock();
                }}
            >
                <Experience />
            </Canvas>
        </>
    )
}