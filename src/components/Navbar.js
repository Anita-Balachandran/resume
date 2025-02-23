import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #0066cc;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavList>
        <li><NavItem to="/">Home</NavItem></li>
        <li><NavItem to="/about">About</NavItem></li>
        <li><NavItem to="/blog">Blog</NavItem></li>
        <li><NavItem to="/contact">Contact</NavItem></li>
      </NavList>
    </Nav>
  );
}

export default Navbar; 