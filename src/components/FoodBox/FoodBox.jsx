import { Component } from "react";
import List from "../List";
import "./FoodBox.css";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      totalAmount: 0,
    };
  }

  handleCount = (value) => {
    this.setState({ count: value });
  };

  handleTotal = () => {
    this.setState({ totalAmount: this.state.count * this.props.data.cal });
  };

  handleReset = () => {
    this.setState({ count: 0, totalAmount: 0 });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="food">
        <img src={data.img} alt="" />
        <div className="info">
          <p>{data.name}</p>
          <span>Calories: {data.cal}</span>
        </div>
        <div className="input">
          <input
            value={this.state.count}
            type="number"
            placeholder="Enter number here"
            onChange={(e) => this.handleCount(e.target.value)}
          />
          <button onClick={this.handleTotal}>+</button>
        </div>
        <List
          count={this.state.count}
          name={data.name}
          total={this.state.totalAmount}
          reset={this.handleReset}
        />
      </div>
    );
  }
}
