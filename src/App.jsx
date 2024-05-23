import { Component } from "react";
import FoodBox from "./components/FoodBox/FoodBox";
import FoodData from "./components/FoodData";
import Search from "./components/Search/Search";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      count: 0,
    };
  }

  handleSearch = (query) => {
    this.setState({ search: query });
  };

  handleCount = (value) => {
    this.setState({ count: value });
  };

  render() {
    return (
      <div className="app">
        <Search handleSearch={this.handleSearch} />

        <div className="items">
          {FoodData.filter((el) => {
            if (this.state.search == "") return el;
            else if (
              el.name.toLowerCase().includes(this.state.search.toLowerCase())
            ) {
              return el;
            }
          }).map((food) => (
            <FoodBox data={food} key={food.id} />
          ))}
        </div>
      </div>
    );
  }
}
