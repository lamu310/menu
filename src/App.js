import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [foods, setFoods] = useState(items);

  const foodsByCategory = function (category) {
    if (category === "all") {
      setFoods(items);
      return;
    }

    let newFoods = items.filter((food) => {
      return food.category === category;
    });

    setFoods(newFoods);
  };
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          {<Categories selectCategory={foodsByCategory} />}
          <div className="section-center">
            {foods.map((food) => {
              return <Menu key={food.id} {...food} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
