import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import Axios from "axios";

export default function EpisodesList() {
    let [episodes,setEps] = useState();
    useEffect(() => {
        console.log("hi");
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        Axios.get("https://rickandmortyapi.com/api/episode/")
          .then(res => setEps(res.data.results))
          .catch(err => console.log(err));
      }, []);
    if (!episodes) {
        return (<h2>Loading...</h2>)
    }
    return (
        <div className="episode-list grid-view">
            {episodes.map(episode => <EpisodeCard key={episode.id} episode={episode}/>)}
        </div>
        )
}
