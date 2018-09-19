import React from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Navigationbar extends React.Component {
  
  
  render() {
        return (
    <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Blog</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav onSelect={this.props.handleClick}>
    <NavItem eventKey={1} href="#">
      Home
    </NavItem>
    <NavItem eventKey={2} href="#">
      About
    </NavItem>
  </Nav>
</Navbar>


        )
    }
}