import React from "react";
import {Route} from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import EpisodesList from "./components/EpisodesList";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import Axios from "axios";

export default function App() {

  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
      <Route path="/locations" component={LocationsList}/>
      <Route path="/episodes" component={EpisodesList}/>
      <Route path="/search" component={() => <SearchForm/>}/>
    </main>
  );
}
