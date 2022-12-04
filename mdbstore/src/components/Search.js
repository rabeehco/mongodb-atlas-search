import { useState } from "react";
import { useHistory } from "react-router-dom";
import config from "../config";

export default function Search(props) {
  let [ suggestions, setSuggestions ] = useState([]);
  let [ query, setQuery ] = useState("");
  let history = useHistory();

  const handleSearchButton = async (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  }

  const handleSearchTermChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleKeyUp = async (e) => {
    e.preventDefault();
    let result = await fetch(`${config.BASE_URL}/autocomplete/${query}`).then(r => r.json());
    setSuggestions(result);
  }

  return (
    <div className="search-bar row justify-content-center">
      <div className="col-10">
        <form className="p-4" onSubmit={handleSearchButton}>
          <div className="input-group">
            <input value={query} onKeyUp={handleKeyUp} onChange={handleSearchTermChange} className="form-control" list="datalistOptions" placeholder="What are you looking for?" />
            <datalist id="datalistOptions">
              {suggestions.map((s, index) => {
                return (
                  <option key={index} value={s.name} />
                )
              })}
            </datalist>
            <button type="button" onClick={handleSearchButton} className="btn btn-secondary">Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}