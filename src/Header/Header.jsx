export function Header() {
  return (
    <>
      <nav>
        <div>
          <input type="text" placeholder="Search the item you want" />
        </div>
        <div>
          <h1>Filters:</h1>
          <label>
            <input type="radio" name="filter" />
            Name
          </label>
          <label>
            <input type="radio" name="filter" />
            Ingredient
          </label>
          <label>
            <input type="radio" name="filter" />
            Cousin
          </label>
        </div>
      </nav>
    </>
  );
}
