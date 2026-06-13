function SearchBar({ search, setSearch }) {

  return (

    <div className="search-container">

      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

    </div>

  );
}

export default SearchBar;