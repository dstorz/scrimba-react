export default function IngredientList({ ingredients, toggleRecipeShown }) {
  const ingredientElements = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientElements}
      </ul>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={toggleRecipeShown}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
