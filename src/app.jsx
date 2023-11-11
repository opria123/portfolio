import "./style.css";
import Interactive from "./components/Interactive";
import Standard from "./components/Standard";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

import useGame from './stores/useGame'

export default function App() {
    // const setSiteData = useGame((state) => state.setSiteData);
    // const setResume = useGame((state) => state.setResume);

    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="interactive" element={<Interactive />} />
                <Route path="standard" element={<Standard />} />
            </Route>
        </Routes>
    );
}