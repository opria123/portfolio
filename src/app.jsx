import "./style.css";
import Interactive from "./components/Interactive";
import Standard from "./components/Standard";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
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