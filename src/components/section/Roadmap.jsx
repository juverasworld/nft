import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin:1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width:fit-content;


  
`;

const Roadmap = () => {
  return (
    <Section>
      <Title>RoadMap</Title>
    </Section>
  );
};

export default Roadmap;
