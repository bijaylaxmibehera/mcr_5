import { useState } from "react";

export function Modal({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine_type: "",
    ingredient_list: "",
    instructions: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setRecipe((prevRecipe) => ({ ...prevRecipe, image: file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation or additional checks if needed

    // Create a new recipe object
    const newRecipe = {
      ...recipe,
      id:Math.floor(Math.random() * 1000000),
    };


    // Add the new recipe to the list
    addRecipe(newRecipe);

    // Reset the form fields
    setRecipe({
      name: "",
      cuisine_type: "",
      ingredient_list: "",
      instructions: "",
      image: null,
    });
  };

  return (
    <>
      <div className="add-new-recipe">
        <h1>Add new recipe</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Add name of recipe"
                value={recipe.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Cuisine type:
              <input
                type="text"
                name="cuisine_type"
                placeholder="Add cuisine type"
                value={recipe.cuisine_type}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Ingredient list:
              <textarea
                name="ingredient_list"
                value={recipe.ingredient_list}
                onChange={handleInputChange}
              ></textarea>
            </label>
            <label>
              Instructions:
              <textarea
                name="instructions"
                value={recipe.instructions}
                onChange={handleInputChange}
              ></textarea>
            </label>
            <label>
              Upload image:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <button type="submit">Add Recipe</button>
          </div>
        </form>
      </div>
    </>
  );
}
