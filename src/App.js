import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartScreen from "./pages/startScreen/startScreen";
import PreTest from "./pages/preTest/preTest";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<StartScreen/>} />
      <Route path="/pre" exact element={<PreTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
