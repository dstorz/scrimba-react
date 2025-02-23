export default function SearchForm() {
  return (
    <main>
      <form className="ingredient-form">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button type="sumbit" name="add-ingredient">
          Add ingredient
        </button>
      </form>
    </main>
  );
}
