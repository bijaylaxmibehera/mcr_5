// import { Recepies } from "../db/Recipes";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../";

export function RecipeDetails() {
  const {recepies}=useContext(DataContext)
  const { id } = useParams();
  const recipe =recepies.find((recipe) => recipe.id === Number(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const { image, name, cuisine_type, ingredient_list, instructions } = recipe;

  return (
    <>
      <h1>Recipe Details</h1>
      <div className="recipe-details">
        <img className="card-img" src={image} alt="" />
        <div className="card-text">
          <h2>{name}</h2>
          <h3>Cuisine Type: <span>{cuisine_type}</span></h3>
          <h3>Ingredients:</h3>
          <ul>
            {ingredient_list.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <NavLink to="/">Go Back</NavLink>
        </div>
      </div>
    </>
  );
}
