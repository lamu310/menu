import React from "react";

const Categories = (props) => {
  const selectFoodsByCategory = props.selectCategory;
  return (
    <>
      <div className="btn-container">
        <button
          onClick={() => selectFoodsByCategory("all")}
          className="filter-btn"
        >
          All
        </button>
        <button
          onClick={() => selectFoodsByCategory("breakfast")}
          className="filter-btn"
        >
          BreakFast
        </button>
        <button
          onClick={() => selectFoodsByCategory("lunch")}
          className="filter-btn"
        >
          Lunch
        </button>
        <button
          onClick={() => selectFoodsByCategory("shakes")}
          className="filter-btn"
        >
          Shakes
        </button>
      </div>
      <div className="section-container"></div>
    </>
  );
};

export default Categories;
