import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 5rem;
  margin: 0 auto;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Nav = () => {
  return (
    <div>
      <Section>
        <Navbar>
          <Logo />
          <Menu>
            <MenuItem className="">Home </MenuItem>
            <MenuItem className="">About </MenuItem>
            <MenuItem className="">Roadmap</MenuItem>
            <MenuItem className="">Showcase</MenuItem>
            <MenuItem className="">Team</MenuItem>
            <MenuItem className="">Faq</MenuItem>
          </Menu>
  <Button link="https://www.google.com" text="Create Wallet"/>
        </Navbar>
      </Section>
    </div>
  );
};

export default Nav;
