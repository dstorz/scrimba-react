export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  function suppressSubmit(event) {
    event.preventDefault();
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
