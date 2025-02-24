import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    // ingredients.push(newIngredient); // DOES NOT WORK - don't modify the state variable directly
    setIngredients((prev) => [...prev, newIngredient]);
  }

  function handleClick() {
    console.log("clicked");
  }

  const ingredientElements = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <main>
      <form className="ingredient-form" onSubmit={handleSubmit}>
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
