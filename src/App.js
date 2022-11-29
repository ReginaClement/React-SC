import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Hooks from "./components/Hooks";
import EffectHook from "./components/EffectHook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EffectHook />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="help" element={<Help />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
