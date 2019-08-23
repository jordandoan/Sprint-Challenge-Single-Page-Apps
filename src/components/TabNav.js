import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default function TabNav() {
    return (
        <Menu>
          <Menu.Item
            header as={NavLink} exact to ="/"
          >
            <Icon name="home"/>
            Home Page
          </Menu.Item>
          <Menu.Item
            header as={NavLink} exact to ="/characters"
          >
            <Icon name="users"/>
            Characters
          </Menu.Item>
  
          <Menu.Item
            header as={NavLink} exact to ="/locations"
          >
            <Icon name="location arrow"/>
            Locations
          </Menu.Item>
  
          <Menu.Item
            header as={NavLink} exact to ="/episodes"
          >
            <Icon name="film"/>
            Episodes
          </Menu.Item>
          <Menu.Item
            header as={NavLink} exact to ="/search"
          >
            <Icon name="search"/>
            Search
          </Menu.Item>
        </Menu>
    );
}

