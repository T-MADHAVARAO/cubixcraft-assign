import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
class BmiApp extends Component {
  state = { weight: "", height: "", error: "", result: "" };

  onWeight = (event) => {
    this.setState({ weight: event.target.value });
  };

  onHeight = (event) => {
    this.setState({ height: event.target.value });
  };

  checkBMI = () => {
    const { weight, height } = this.state;
    if (
      1.0 <= parseFloat(weight) &&
      parseFloat(weight) <= 300.0 &&
      1.0 <= parseFloat(height) &&
      parseFloat(height) <= 3.0
    ) {
      let bmiValue = weight / height ** 2;
      const bmi = bmiValue.toFixed(1);
      this.setState({ result: bmi, error: "" });
    } else {
      this.setState({ error: "Entered Invalid Values", result: "" });
    }
  };

  render() {
    const { weight, height, error, result } = this.state;

    return (
      <div className="BMI-bg">
        <h1>Check Your BMI</h1>
        <form className="user">
          <input
            type="text"
            placeholder="Enter your weight in KGs"
            value={weight}
            onChange={this.onWeight}
          />
          <input
            type="text"
            placeholder="Enter your height in meters"
            value={height}
            onChange={this.onHeight}
          />
          <button type="button" onClick={this.checkBMI}>
            Check BMI
          </button>
          <p>{error}</p>
        </form>
        <p>{`Your BMI is : ${result}`}</p>
        <div className="back">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BmiApp;
