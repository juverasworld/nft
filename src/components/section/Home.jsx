import React from "react";
import styled, { keyframes } from "styled-components";
import TypewriterText from "../TypewriterText";
import CoverVideo from "../CoverVideo";
import RoundedTextBlack from "../../assets/Rounded-Text-Black.png";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 75%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
100%{
  transform:rotate(1turn);
}
`;

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.themefontxl};
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypewriterText />
        </Box>
        <Box>
          <CoverVideo />
        </Box>

        <Round>
          <Circle>&#x2193;</Circle>
          <img src={RoundedTextBlack} alt="NFT" className="" />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
