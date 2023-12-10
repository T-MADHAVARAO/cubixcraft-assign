import { Link } from "react-router-dom";
import "./index.css";

const HomePage = () => (
  <div className="App">
    <h1 className="details">MY ABOUT :</h1>
    <div className="data">
      <h1 className="item">
        Name : <span>TARRA MADHAVA RAO</span>
      </h1>
      <h1 className="item">
        Graduation PassOut Year: <span>JULY-2024</span>
      </h1>
      <h1 className="item">Technologies/Language: </h1>
      <ul className="technologies">
        <li>HTML</li>
        <li>CSS</li>
        <li>BootStrap</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>Python</li>
        <li>SQLite</li>
        <li>Node.JS(Express.js)</li>
      </ul>
      <h1>
        BMI Calculator Project : <Link to="/bmi-app">BMI-APP</Link>
      </h1>
    </div>
  </div>
);

export default HomePage;
