import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: white;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;

    color: white;
    &:hover {
      color: white;
    }
  }

  #logo-draftstream {
    margin: 10px;
  }
  #d {
    font-size: larger;
  }
  #s {
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img
          id="logo"
          src="assets/rsz_2rsz_1cinemadraft-logo.png"
          alt="img not loaded"
        />
        <span id="logo-draftstream">
          <span id="d">D</span>raft<span id="s">S</span>tream
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/about">Username</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
