import React from "react";
import styled from "styled-components";




const Section = styled.section`
  min-height: 100vh;
  height:100vh
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Footer = () => {
  return <Section>Footer</Section>;
};

export default Footer;
