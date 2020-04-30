import React from "react";

const SearchForm =({ setSearchTerm }) => {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  
  return (
    <section className="section">
      <h2 className="section-title">Search Cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Your Favorite Cocktails!</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;