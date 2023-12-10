import { Link } from "react-router-dom";
const Resume = () => (
  <div className="App">
    <h1>My Resume</h1>
    <a href="./Madhava_Rao_2023-10-16-192602.pdf" download="madhav_resume.pdf">
      Download RESUME
    </a>
    <div className="back">
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  </div>
);

export default Resume;
