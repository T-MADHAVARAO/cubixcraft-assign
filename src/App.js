import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BmiApp from "./components/BMIPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/bmi-app" Component={BmiApp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
