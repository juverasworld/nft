import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import img1 from "../../assets/Nfts/bighead-1.svg";
import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../../assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
import img9 from "../../assets/Nfts/bighead-9.svg";
import img10 from "../../assets/Nfts/bighead.svg";
import ETH from "../../assets/icons8-ethereum-48.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & > *:first-child {
    animation-duration: 20s;
  }
  & > *:last-child {
    animation-duration: 15s;
  }
`;

const move = keyframes`
0%{
  transform:translateX(100%)
}
100%{
  transform:translateX(-100%)
}
`;
const Row = styled.div`
  whitespace: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move}  linear infinite ${(props) => props.direction};
`;
const ImgConatiner = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }
  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;
const NftItem = ({ img, number = 0, price = 0, passref }) => {
  let play = (e) => {
    passref.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passref.current.style.animationPlayState = "paused";
  };
  return (
    <ImgConatiner>
      <img
        src={img}
        alt="Weird people"
        onMouseOver={(e) => pause(e)}
        onMouseOut={(e) => play(e)}
      />
      <Details>
        <div>
          <span>Weidos</span>
          <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgConatiner>
  );
};
const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={654} price={1.5} passref={Row1Ref} />
        <NftItem img={img2} number={654} price={0.5} passref={Row1Ref} />
        <NftItem img={img3} number={654} price={1} passref={Row1Ref} />
        <NftItem img={img4} number={694} price={2.5} passref={Row1Ref} />
        <NftItem img={img5} number={654} price={1.5} passref={Row1Ref} />
        <NftItem img={img6} number={654} price={3.5} passref={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img7} number={654} price={1.5} passref={Row2Ref} />
        <NftItem img={img8} number={154} price={1.5} passref={Row2Ref} />
        <NftItem img={img1} number={624} price={1.3} passref={Row2Ref} />
        <NftItem img={img9} number={604} price={6.5} passref={Row2Ref} />
        <NftItem img={img10} number={544} price={1.5} passref={Row2Ref} />
        <NftItem img={img3} number={654} price={1.4} passref={Row2Ref} />
      </Row>
    </Section>
  );
};

export default Showcase;
