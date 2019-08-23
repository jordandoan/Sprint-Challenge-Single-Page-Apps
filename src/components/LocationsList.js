import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import Axios from "axios";

export default function LocationsList() {
    let [locations,setLocations] = useState();
    useEffect(() => {
        console.log("hi");
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        Axios.get("https://rickandmortyapi.com/api/location/")
          .then(res => setLocations(res.data.results))
          .catch(err => console.log(err));
      }, []);
    if (!locations) {
        return (<h2>Loading...</h2>)
    }
    return (
        <div className="location-list grid-view">
            {locations.map(location => <LocationCard key={location.id} location={location}/>)}
        </div>
        )
}
