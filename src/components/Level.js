import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  margin: 0 10px;
  min-width: 60vw;
  min-height: 550px;
  scroll-snap-align: start;
  border: 1px solid #fff;
  background-color: #222;
  border-radius: 12px;
  padding: 30px;
`;
const H2 = styled.h2`
  margin: 0 0;
  font-size: 22px;
`;
const P = styled.p`
  margin: 2px 0 20px;
  font-size: 14px;
  opacity: 0.6;
`;
const UL = styled.ul`
  padding: 0;
`;
const LI = styled.li`
  color: ${(p) => p.color || "inherit"};
  font-size: 13px;
  display: flex;
  margin: 0;
  align-items: center;
  font-weight: 500;
  @media (min-width: 600px) {
    font-size: 20px;
  }
`;
const IconWrapper = styled.div`
  width: 50px;
  margin-right: 10px;
  @media (min-width: 600px) {
    width: 100px;
  }
`;

const Level = ({ isFirst, name, title, challenges, newChallenge, svg }) => (
  <Wrapper>
    <H2>{name}</H2>
    <P>{title}</P>
    <UL>
      {challenges.map(({ name, svg }) => (
        <LI color={isFirst ? "orange" : "white"}>
          {svg && <IconWrapper>{svg}</IconWrapper>}
          {name}
        </LI>
      ))}
      {newChallenge && (
        <LI color="orange">
          {newChallenge.svg && <IconWrapper>{newChallenge.svg}</IconWrapper>}
          {newChallenge.name}
        </LI>
      )}
    </UL>
  </Wrapper>
);

export default Level;
