import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import Twitter from "../Icons/Twitter";

import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";
import LinkedIn from "../Icons/LinkedIn";

const Section = styled.section`
  min-height: 100vh;
  height:100vh
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;

  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const Item = styled.li`
  width: fit-content;
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

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration:underline;
  }
`;
const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://www.linkedin.com/obasi-vera-a8b155198" target={"_blank"} rel="noopener">
              <LinkedIn/>
            </a>
            <a href="https://twitter.com/Vera_Ifebuche" target={"_blank"} rel="noopener">
              <Twitter />
            </a>
            <a href="https://facebook.com" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
            <a href="https://Instagram.com" target={"_blank"} rel="noopener">
              <Instagram />
            </a>
            <a href="https://facebook.com" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>RoadMap</Item>
          <Item>Showcase</Item>
          <Item>Team</Item>
          <Item>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          $copy; {new Date().getFullYear()} Weirdos CLub. All right reserved.
        </span>
        <span>
          Made with &#10084; by
          <a
            href=" https://vera-black.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Vee
          </a>
        
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
