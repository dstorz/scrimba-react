import { useState } from "react";

import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  // const [ingredients, setIngredients] = useState([
  //   "all the main spices",
  //   "pasta",
  //   "ground beef",
  //   "tomato paste",
  // ]);
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(undefined);

  function handleSubmit(event) {
    /* Imperative way of handling form submission. Meant to be given to the onSubmit attribute
      of the form.
    */
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    // ingredients.push(newIngredient); // DOES NOT WORK - don't modify the state variable directly
    setIngredients((prev) => [...prev, newIngredient]);
    event.currentTarget.reset();
  }

  function addIngredient(formData) {
    /*
      Declarative way to access form data. Meant to be used in the action attribute of the form.
      Automatically suppresses page reload and resets the form after.
    */
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <form action={addIngredient} className="ingredient-form">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button type="submit" name="add-ingredient">
          Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          toggleRecipeShown={getRecipe}
        />
      )}
      {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
  );
}
