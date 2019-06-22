import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import logo from '../img/favicon.png';
import { Navbar, Divider, Dropdown, Button, NavItem } from "react-materialize";

class NavbarCon extends React.Component {
  render() {
    return (
      <Navbar brand={<a />} alignLinks="right">
        <NavItem href="">Getting started</NavItem>
        <NavItem href="components.html">Components</NavItem>
        <Dropdown trigger={<a />}>
          <a href="#">one</a>
          <a href="#">two</a>
          <Divider />
          <a href="#">three</a>
        </Dropdown>
      </Navbar>
    );
  }
}

export default NavbarCon;
