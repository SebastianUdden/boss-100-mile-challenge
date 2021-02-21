import { LEVELS } from "../constants/levels";
import Level from "./Level";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0px;
  width: 100vw;
`;
const H1 = styled.h1`
  margin: 0 20px;
  font-size: 46px;
  letter-spacing: 15px;
  text-align: center;
`;
const H2 = styled.h2`
  margin: 0 20px 20px;
  font-size: 26px;
  letter-spacing: 3px;
  text-align: center;
  color: orange;
`;
const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 50px;
`;

const Exercises = () => {
  return (
    <Wrapper>
      <H1>BOSS</H1>
      <H2>100 MILE CHALLENGE</H2>
      <UL>
        {LEVELS.map((level, index) => (
          <Level {...level} isFirst={index === 0} />
        ))}
      </UL>
    </Wrapper>
  );
};

export default Exercises;
