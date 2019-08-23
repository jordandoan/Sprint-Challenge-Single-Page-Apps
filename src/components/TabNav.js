import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
// const panes = [
//     { menuItem: 'Home Page', render: () => <Tab.Pane><NavLink to="/characters">Hey</NavLink></Tab.Pane> },
//     { menuItem: 'Characters', render: () => <Tab.Pane><NavLink to="/characters"/></Tab.Pane> },
//     { menuItem: 'Locations', render: () => <Tab.Pane><NavLink to="/locations"/></Tab.Pane> },
//     { menuItem: 'Episodes', render: () => <Tab.Pane><NavLink to="/episodes"/></Tab.Pane> },
//   ]
const panes = [
{ menuItem: NavLink, pane: 'Tab 1 Content' },
{ menuItem: 'Tab 2', pane: 'Tab 2 Content' },
{ menuItem: 'Tab 3', pane: 'Tab 3 Content' },
];
export default function TabNav() {
    return <Tab panes={panes}/>
};

