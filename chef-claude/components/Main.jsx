import { useState } from "react";

import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);

  /**
   * Challenge: clean up our code!
   * Let's make a couple new components to make things a
   * little cleaner. (Notice: I'm not suggesting what we
   * have now is bad or wrong. I'm mostly finding an excuse
   * to get in some hands-on practice 🙂)
   *
   * 1. Move the entire recipe <section> into its own
   *    ClaudeRecipe component
   * 2. Move the list of ingredients <section> into its
   *    own IngredientsList component.
   *
   * While you're considering how to structure things, consider
   * where state is, think about if it makes sense or not to
   * move it somewhere else, how you'll communicate between
   * the parent/child components, etc.
   *
   * The app should function as it currently does when you're
   * done, so there will likely be some extra work to be done
   * beyond what I've listed above.
   */

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

  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
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
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
