import { Modal } from "./Modal/Modal";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "./";
import "./Landing.css";

export function Landing() {
  const { recepies, dispatch } = useContext(DataContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("name");
  const [showModal, setShowModal] = useState(false);

  const addRecipe = (newRecipe) => {
    dispatch({ type: "ADD_RECIPE", payload: newRecipe });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredRecipes = recepies.filter((recipe) =>
    recipe[filterOption].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav>
        <div>
          <input
            type="text"
            placeholder="Search the item you want"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="filter">
          <h1>Filters:</h1>
          <label>
            <input
              type="radio"
              name="filter"
              value="name"
              checked={filterOption === "name"}
              onChange={handleFilterChange}
            />
            Name
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value=" ingredient_list"
              checked={filterOption === " ingredient_list"}
              onChange={handleFilterChange}
            />
            Ingredient
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="cuisine_type"
              checked={filterOption === "cuisine_type"}
              onChange={handleFilterChange}
            />
            Cousine
          </label>
        </div>
      </nav>
      <h1>All recepies:</h1>
      <div className="responsive-grid">
        {filteredRecipes.map((recipe) => {
          const { id, image, name, cuisine_type } = recipe;
          return (
            <div className="card" key={id}>
              <img class="card-img" src={image} alt="" />
              <div className="card-text">
                <h2>{name}</h2>
                <h3>
                  Cuisine Type: <span>{cuisine_type}</span>
                </h3>
                <h3>
                  Ingredient:{" "}
                  <span>
                    <NavLink to={`/recipe/${id}`}>See recipe&gt;</NavLink>
                  </span>
                </h3>
                <h3>
                  Instructions:{" "}
                  <span>
                    <NavLink to={`/recipe/${id}`}>See recipe&gt;</NavLink>
                  </span>
                </h3>
              </div>
            </div>
          );
        })}
        <div>
          <button className="add-icon" onClick={() => setShowModal(!showModal)}>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <Modal addRecipe={addRecipe} />
        </div>
      )}
    </>
  );
}
