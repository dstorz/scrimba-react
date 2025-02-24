import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  function suppressSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    // ingredients.push(newIngredient); // DOES NOT WORK - don't modify the state variable directly
    setIngredients([...ingredients, newIngredient]);
  }

  function handleClick() {
    console.log("clicked");
  }

  const ingredientElements = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <main>
      <form className="ingredient-form" onSubmit={suppressSubmit}>
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button type="submit" name="add-ingredient" onClick={handleClick}>
          Add ingredient
        </button>
      </form>
      <ul>{ingredientElements}</ul>
    </main>
  );
}
