import { Modal } from "./Modal/Modal";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./";

export function Landing() {
  const {recepies, dispatch}=useContext(DataContext)
  const addRecipe = (newRecipe) => {
    dispatch({ type: "ADD_RECIPE", payload: newRecipe });
  };


  return (
    <>
      <h1>All recepies:</h1>
      <div className="responsive-grid">
        {recepies.map((recipe) => {
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
      </div>
      <div>
        <Modal addRecipe={addRecipe} />
      </div>
     
    </>
  );
}
