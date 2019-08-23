import React, { useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  // TODO: Add stateful logic for query/form data
  let url = "https://rickandmortyapi.com/api/character/?name="
  let [name, setName] = useState("");
  let [results, setResults] = useState();
  let [error, setError] = useState();

  let onSearch = (event) => {
    event.preventDefault();
    Axios.get(url + name)
      .then(res => {
        setResults(res.data.results);
        setError(false);
      })
      .catch(err => {
        setError(true);
        setResults(null);
      });
  }

  let handleInputChange = (event) => {
    setName(event.target.value);
  }
  return (
    <section className="search-form">
      <form onSubmit={(event) => onSearch(event)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
      <div className="grid-view">
        {results && results.map(character => <CharacterCard key={character.id} character={character}/>)}
        {error && <p className="error">Could not find character or ran into errors searching... please try again!</p>}
      </div>

    </section>
  );
}
