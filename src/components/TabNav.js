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
            Home Page
          </Menu.Item>
          <Menu.Item
            header as={NavLink} exact to ="/characters"
          >
            Characters
          </Menu.Item>
  
          <Menu.Item
            header as={NavLink} exact to ="/locations"
          >
            Locations
          </Menu.Item>
  
          <Menu.Item
            header as={NavLink} exact to ="/episodes"
          >
            Episodes
          </Menu.Item>
        </Menu>
    );
}

