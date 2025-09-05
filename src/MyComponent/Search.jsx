import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch, city }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (city) {
      setInputValue(city);
    }
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSearch(inputValue);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          className="search-input"
            // style={{ border: 'none', outline: 'none' }}

          type="text"
          id="search"
          placeholder="Enter City name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <FaSearch color="#8b8b8b" />
        </button>
      </form>
    </div>
  );
};

export default Search;
