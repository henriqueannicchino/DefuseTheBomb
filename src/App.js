import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartScreen from "./pages/startScreen/startScreen";
import PreTest from "./pages/preTest/preTest";
import Bomb from "./pages/bomb/bomb";
import PosTest from "./pages/posTest/posTest";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<StartScreen/>} />
      <Route path="/pre" exact element={<PreTest />} />
      <Route path="/bomb" exact element={<Bomb/>} />
      <Route path="/pos" exact element={<PosTest/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
