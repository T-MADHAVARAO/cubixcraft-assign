import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import BmiApp from "./components/BMIPage";
import Resume from "./components/Resumepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/bmi-app" Component={BmiApp} />
        <Route path="/my-resume" Component={Resume} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
