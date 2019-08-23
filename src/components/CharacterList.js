import React, { useEffect, useState } from "react";
import Axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  let [characters,setChars] = useState();

  useEffect(() => {
    console.log("hi");
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => setChars(res.data.results))
      .catch(err => console.log(err));
  }, []);

  if (!characters) {
    return <h2>Loading...</h2>
  }
  return (
    <section className="character-list grid-view">
      {characters.map(character => <CharacterCard key={character.id} character={character}/>)}
    </section>
  );
}
