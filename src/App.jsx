import React, { useState, useMemo } from "react";
import FoodBox from "./components/FoodBox/FoodBox";
import FoodData from "./components/FoodData";
import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const handleSearch = (query) => {
    setSearch(query);
  };

  const handleCount = (value) => {
    setCount(value);
  };

  const filteredFoodData = useMemo(() => {
    if (!search) return FoodData;

    return FoodData.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="app">
      <Search handleSearch={handleSearch} />
      <div className="items">
        {filteredFoodData.map((food) => (
          <FoodBox data={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
