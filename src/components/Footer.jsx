import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";

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
  margin: 0 auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
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
            <a href="https://facebook.com" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
            <a href="https://facebook.com" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
            <a href="https://facebook.com" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
            <a href="https://facebook.com" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
            <a href="https://facebook.com" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
          </IconList>
        </Left>
      </Container>
    </Section>
  );
};

export default Footer;
