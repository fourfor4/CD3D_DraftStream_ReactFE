import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
const StyledSideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px; /* Set the width of the sidebar */
  z-index: 1; /* Stay on top of everything */
  top: 3.9em; /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 40px;
  #side-nav-names {
    display: flex;
    flex-drection: row;
    justify-content: center;
    color: white;
    font-weight: bold;
  }
  #line {
    align-items: center;
    width: 60%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path:
            "/contestslobby" /* path is used as id to check which NavItem is active basically */,
          name: "Contests",
          css: "fa fa-fw fa-film ",
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
        },
        {
          path: "/welcome",
          name: "Rules",
          css: " fas fa-clipboard-list rules",
          key: 2,
        },
        {
          path: "/logout",
          name: "Logout",
          css: "fas fa-sign-out-alt logout",
          key: 3,
        },
      ],
    };
  }
  onItemClick = (path) => {
    this.setState({
      activePath: path,
    }); /* Sets activePath which causes rerender which causes CSS to change */
  };
  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <div>
                <NavItem
                  path={item.path}
                  name={item.name}
                  css={item.css}
                  // onItemClick={this.onItemClick}
                  /* Simply passed an entire function to onClick prop */ active={
                    item.path === activePath
                  }
                  key={item.key}
                />
                <div id="side-nav-names">{item.name}</div>
                <hr id="line" />
              </div>
            );
          })
        }
      </StyledSideNav>
    );
  }
}
const RouterSideNav = withRouter(SideNav);
const StyledNavItem = styled.div`
  height: 50px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0; /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => (props.active ? "white" : "white")};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
    :focus {
      background-color: #ff4151;
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

class NavItem extends React.Component {
  // handleClick = () => {
  //   const { path, onClick } = this.props;
  //   onClick(path);
  // };

  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}
const NavIcon = styled.div``;
export default class sidebar extends Component {
  render() {
    return (
      <div>
        <RouterSideNav></RouterSideNav>
      </div>
    );
  }
}
