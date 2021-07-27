import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <a>
          <img src="./images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="./images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="./images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="./images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="./images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="./images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://avatars.githubusercontent.com/u/37710130?v=4" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 30px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      // Adds a div container
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
